CREATE     PROCEDURE [dbo].[SPActualizarContrasenaTemporal]

( @IdUsuario INT
, @ContrasenaTemporal NVARCHAR(50)
,@INDICADOR INT OUTPUT
,@MENSAJE VARCHAR(150) OUTPut
)
AS
    BEGIN
            BEGIN TRY
        BEGIN TRAN ACTUALIZAR
                BEGIN
                        UPDATE        
                        Usuarios SET
                        ContrasenaTemporal = ENCRYPTBYPASSPHRASE('INSTINTOVIAJERO', @ContrasenaTemporal)
                       WHERE    IdUsuario = @IdUsuario     

						UPDATE 
					   Usuarios SET
					   Contrasena = NULL
					   WHERE IdUsuario = @IdUsuario

                COMMIT TRAN ACTUALIZAR
                SET @INDICADOR = 0
                SET @MENSAJE = 'Contraseña temporal actualizada exiosamente'
                END
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END

