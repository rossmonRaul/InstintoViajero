CREATE PROCEDURE [dbo].[SPActualizarEstadoPlan]

( @IdEstadoPlan INT
, @CodEstadoPlan NVARCHAR(16)
, @DescEstadoPlan NVARCHAR(30)
, @Estado BIT
, @Usuario NVARCHAR(MAX) 
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
                        UPDATE        EstadosPlan SET
									CodEstadoPlan = @CodEstadoPlan
									, DescEstadoPlan = @DescEstadoPlan
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdEstadoPlan = @IdEstadoPlan

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdEstadoPlan: ' + CAST(@IdEstadoPlan AS NVARCHAR(12)) + ', ' + 
									   'CodEstadoPlan: ' + CAST(@CodEstadoPlan AS NVARCHAR(16)) + ', ' +
									   'DescEstadoPlan: ' + CAST(@DescEstadoPlan AS NVARCHAR(30)) + ', ' +
                                       'UsuarioModificacion: ' + @Usuario + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'EstadosPlan', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'El estado ha sido actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el estado.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END