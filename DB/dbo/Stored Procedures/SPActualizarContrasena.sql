CREATE     PROCEDURE [dbo].[SPActualizarContrasena]

( @IdUsuario INT
, @ContrasenaTemporal NVARCHAR(50)
,@INDICADOR INT OUTPUT
,@MENSAJE VARCHAR(150) OUTPUT
)
AS
    BEGIN
            BEGIN TRY
        BEGIN TRAN ACTUALIZAR
                BEGIN
                        UPDATE        
                        Usuarios SET
                        Contrasena = ENCRYPTBYPASSPHRASE('INSTINTOVIAJERO', @ContrasenaTemporal)
                       WHERE    IdUsuario = @IdUsuario  
					   
					   UPDATE 
					   Usuarios SET
					   ContrasenaTemporal = null
					   WHERE IdUsuario = @IdUsuario

                COMMIT TRAN ACTUALIZAR
                SET @INDICADOR = 0
                SET @MENSAJE = 'Contraseña  actualizada exiosamente'
                END
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END
