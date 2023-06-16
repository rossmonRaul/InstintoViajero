CREATE   PROCEDURE [dbo].[SPEliminarRol]

( @IdRol INT
, @Usuario NVARCHAR(MAX)
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)

AS
	BEGIN
		DECLARE @ESTADO_ACTUAL BIT;
		DECLARE @Vfecha DATETIME;
		SET @Vfecha = GETDATE();

			BEGIN TRY
				BEGIN TRAN DESACTIVAR
					BEGIN
					SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM Roles WHERE IdRol = @IdRol)
						UPDATE  
						Roles SET
						Estado = CASE WHEN @ESTADO_ACTUAL = 1 THEN 0 ELSE 1 END
					  , FechaModificacion = @Vfecha
					  , UsuarioModificacion = @Usuario
					  WHERE IdRol = @IdRol

					  -- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(MAX);
						DECLARE @vAccion NVARCHAR(1);
						SET @vDetalle = 'IdRol: ' + CAST(@IdRol AS NVARCHAR(12)) ;
						SET @vAccion = CASE WHEN @ESTADO_ACTUAL = 1 THEN 'E' ELSE 'A' END

						EXEC [dbo].[SPInsertarBitacora] 'Roles', @vAccion, @vDetalle, @Vfecha, @Usuario;

					END
						
				COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE = (
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'El Rol fue desactivado exitosamente.'
										 ELSE 'El Rol fue reactivado exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH
	END
