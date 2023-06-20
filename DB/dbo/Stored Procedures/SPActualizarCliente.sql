CREATE PROCEDURE [dbo].[SPActualizarCliente]

( @IdCliente INT
, @IdPersona INT
, @Estado BIT
, @Usuario NVARCHAR(MAX) = NULL
, @INDICADOR INT OUT
, @MENSAJE VARCHAR(50) OUT
)

AS

    BEGIN
		DECLARE @Vfecha DATETIME;
		SET @Vfecha = GETDATE();

            BEGIN TRY
                BEGIN TRAN ACTUALIZAR
                    BEGIN
                        UPDATE        Clientes SET
                                      IdPersona = @IdPersona
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdCliente = @IdCliente

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdCliente: ' + CAST(@IdCliente AS NVARCHAR(12)) + ', ' + 
									   'IdPersona: ' + CAST(@IdPersona AS NVARCHAR(12)) + ', ' +
                                       'UsuarioModificacion: ' + @Usuario + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Clientes', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'El Cliente ha sido actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el cliente.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END