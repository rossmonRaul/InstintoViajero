CREATE   PROCEDURE [dbo].[SPActualizarRol]

( @IdRol INT
, @Descripcion NVARCHAR(50)
, @Estado BIT
, @Usuario NVARCHAR(MAX)
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)
AS
	BEGIN
		DECLARE @Vfecha DATETIME;
		SET @Vfecha = GETDATE();
		
		BEGIN TRY
		BEGIN TRAN ACTUALIZAR
				BEGIN
						UPDATE		
						Roles SET
						Descripcion = @Descripcion
					  , Estado = @Estado
					  , FechaModificacion = @Vfecha
					  , UsuarioModificacion = @Usuario
					  WHERE	IdRol = @IdRol	
					  
					  -- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdRol: ' + CAST(@IdRol AS NVARCHAR(12)) + ', ' + 
										'Descripcion: ' + @Descripcion + ', ' + 
									    'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Roles', 'A', @vDetalle, @Vfecha, @Usuario;

				END

				COMMIT TRAN ACTUALIZAR
				SET @INDICADOR = 0
				SET @MENSAJE = 'Exito: Rol actualizado exiosamente'
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
	END
