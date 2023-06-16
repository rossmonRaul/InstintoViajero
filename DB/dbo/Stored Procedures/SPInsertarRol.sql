CREATE   PROCEDURE [dbo].[SPInsertarRol]
( @Descripcion VARCHAR (50)
, @Estado BIT
, @Usuario Nvarchar(MAX)
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)
AS
		BEGIN
			DECLARE @Vfecha DATETIME;
			SET @Vfecha = GETDATE();
				BEGIN TRY
					BEGIN TRAN INSERTAR
						BEGIN
							INSERT INTO Roles
							(Descripcion, Estado,FechaCreacion, UsuarioCreacion) VALUES 
							(@Descripcion, @Estado, @Vfecha,@Usuario)

								-- Ejecuta SPInsertarBitacora
							DECLARE @vDetalle NVARCHAR(600);						
							SET @vDetalle = 'Descripcion: ' + @Descripcion + ', ' +
										   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

							EXEC [dbo].[SPInsertarBitacora] 'Roles', 'I', @vDetalle, @Vfecha, @Usuario;

						END
				COMMIT TRAN INSERTAR
						SET @INDICADOR = 0
					SET @MENSAJE = 'Exito: Rol registrado exiosamente'
				END TRY
				BEGIN CATCH
					SET @INDICADOR = 1
					SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
					ROLLBACK TRANSACTION INSERTAR
				END CATCH
	END
