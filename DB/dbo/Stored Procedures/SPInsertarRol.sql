CREATE   PROCEDURE [dbo].[SPInsertarRol]
( @Descripcion VARCHAR (50)
, @Estado BIT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)
AS
		BEGIN
			BEGIN TRY
				BEGIN TRAN INSERTAR
					BEGIN
						INSERT INTO Roles
						(Descripcion, Estado,FechaCreacion, UsuarioCreacion) VALUES 
						(@Descripcion, @Estado, GETDATE(),'1')
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
