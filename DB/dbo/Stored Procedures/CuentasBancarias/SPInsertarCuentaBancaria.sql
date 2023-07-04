CREATE PROCEDURE [dbo].[SPInsertarCuentaBancaria]
( 
  @IndicadorPlan INT  --1 CLUB , 2 PAQUETE 
, @IdPlan  INT
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
                BEGIN TRAN INSERTAR
                    BEGIN
						IF @INDICADOR = 1  --1 CLUB
						BEGIN
							INSERT INTO [CuentasBancariasClubDeViaje]
							(
								 IdClubDeViaje
								, Banco
								,Numero
								,FechaVencimiento
								,IndTipoCuenta
								,TipoTarjeta
								, Estado
								, FechaCreacion
								, UsuarioCreacion                            
							) VALUES 
							(                           
								@IdPlan
								,@Banco
								,@Numero
								,@FechaVencimiento
								,@IndTipoCuenta
								,@TipoTarjeta
								, 1
								, @Vfecha
								, @Usuario
							)

							-- Ejecuta SPInsertarBitacora
							DECLARE @vDetalle NVARCHAR(600);						
							SET @vDetalle = 'IdClubDeViaje: ' +  CAST(@IdPlan AS NVARCHAR(10)) + ', ' +
										'Banco: ' + @Banco + ', ' +
										'Numero: '+CAST(@Numero AS NVARCHAR(16)) + ', ' +
										'FechaVencimiento: '+CAST(@FechaVencimiento AS NVARCHAR(5)) + ', ' +
										'IndTipoCuenta: ' + @IndTipoCuenta + ', ' +
										'TipoTarjeta: ' + @TipoTarjeta + ', ' +
										'Estado: ' + CAST(@Estado AS NVARCHAR(1));

							EXEC [dbo].[SPInsertarBitacora] 'CuentasBancariasClubDeViaje', 'I', @vDetalle, @Vfecha, @Usuario;
						END	
						ELSE IF @INDICADOR = 2 -- 2 PAQUETE 
						BEGIN
						INSERT INTO [CuentasBancariasPaquete]
							(
								 IdPaquete
								, Banco
								,Numero
								,FechaVencimiento
								,IndTipoCuenta
								,TipoTarjeta
								, Estado
								, FechaCreacion
								, UsuarioCreacion                            
							) VALUES 
							(                           
								@IdPlan
								,@Banco
								,@Numero
								,@FechaVencimiento
								,@IndTipoCuenta
								,@TipoTarjeta
								, 1
								, @Vfecha
								, @Usuario
							)

							-- Ejecuta SPInsertarBitacora
							DECLARE @vDetalleP NVARCHAR(600);						
							SET @vDetalleP = 'IdPaquete: ' +  CAST(@IdPlan AS NVARCHAR(10)) + ', ' +
										'Banco: ' + @Banco + ', ' +
										'Numero: '+CAST(@Numero AS NVARCHAR(16)) + ', ' +
										'FechaVencimiento: '+CAST(@FechaVencimiento AS NVARCHAR(5)) + ', ' +
										'IndTipoCuenta: ' + @IndTipoCuenta + ', ' +
										'TipoTarjeta: ' + @TipoTarjeta + ', ' +
										'Estado: ' + CAST(@Estado AS NVARCHAR(1));

							EXEC [dbo].[SPInsertarBitacora] 'CuentasBancariasPaquete', 'I', @vDetalleP, @Vfecha, @Usuario;

						END
                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Tarjeta registrada exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al registrar la Tarjeta.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END