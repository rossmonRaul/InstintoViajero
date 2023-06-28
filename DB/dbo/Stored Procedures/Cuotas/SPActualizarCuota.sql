CREATE PROCEDURE [dbo].[SPActualizarCuota]

( @IdCuota INT
, @Codigo NVARCHAR(1)
, @CuotaSemanal NUMERIC(10,2)
, @Monto NUMERIC(10,2)
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
                        UPDATE        Cuotas SET
									  Codigo = @Codigo
									, CuotaSemanal =@CuotaSemanal
									, Monto = @Monto
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdCuota = @IdCuota

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdCuota: ' + CAST(@IdCuota AS NVARCHAR(12)) + ', ' + 									  
									   'Codigo: ' + CAST(@Codigo AS NVARCHAR(30)) + ', ' +
									   'CuotaSemanal: ' + CAST(@CuotaSemanal AS NVARCHAR(11)) + ', ' +
									   'Monto: ' + CAST(@Monto AS NVARCHAR(11)) + ', ' +
                                       'UsuarioModificacion: ' + @Usuario + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Cuotas', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Cuota actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar la cuota.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END
