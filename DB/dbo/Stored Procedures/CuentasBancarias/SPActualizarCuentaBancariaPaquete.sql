CREATE PROCEDURE [dbo].[SPActualizarCuentaBancariaPaquete]
( 
  @IdCuentaBancariaPaquete INT 
, @Banco NVARCHAR(30)
, @Numero NUMERIC(16,0)
, @FechaVencimiento NVARCHAR(5)
, @IndTipoCuenta VARCHAR(1)
, @TipoTarjeta	 NVARCHAR(50)
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
							UPDATE dbo.[CuentasBancariasPaquete] SET
															
								Banco = @Banco
								,Numero =@Numero
								,FechaVencimiento =@FechaVencimiento
								,IndTipoCuenta = @IndTipoCuenta
								, TipoTarjeta = @TipoTarjeta
								, Estado = @Estado
                                , FechaModificacion = @Vfecha
                                , UsuarioModificacion = @Usuario
                                WHERE IdCuentaBancariaPaquete = @IdCuentaBancariaPaquete                         
							

							-- Ejecuta SPInsertarBitacora
							DECLARE @vDetalle NVARCHAR(600);						
							SET @vDetalle = 'IdCuentaBancariaPaquete: ' +  CAST(@IdCuentaBancariaPaquete AS NVARCHAR(10)) + ', ' +
										'Banco: ' + @Banco + ', ' +
										'Numero: '+CAST(@Numero AS NVARCHAR(16)) + ', ' +
										'FechaVencimiento: '+CAST(@FechaVencimiento AS NVARCHAR(5)) + ', ' +
										'IndTipoCuenta: ' + @IndTipoCuenta + ', ' +
										'TipoTarjeta: ' + @TipoTarjeta + ', ' +
										'Estado: ' + CAST(@Estado AS NVARCHAR(1));

							EXEC [dbo].[SPInsertarBitacora] 'CuentasBancariasPaquete', 'A', @vDetalle, @Vfecha, @Usuario;					
                    END

                    COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Información de tarjeta actualizada exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar la información .' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END