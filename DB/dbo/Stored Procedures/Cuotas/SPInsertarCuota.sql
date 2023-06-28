CREATE PROCEDURE [dbo].[SPInsertarCuota]

( 
  @Codigo NVARCHAR(1)
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
                BEGIN TRAN INSERTAR
                    BEGIN
                        INSERT INTO Cuotas
                        (
                              Codigo
							, CuotaSemanal
							, Monto
                            , Estado
                            , FechaCreacion
                            , UsuarioCreacion                            
                        ) VALUES 
                        (
						      @Codigo
							, @CuotaSemanal
							, @Monto
                            , 1
                            , @Vfecha
                            , @Usuario
                        )

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'Codigo: ' + @Codigo + ', ' +
									   'CuotaSemanal: ' + CAST(@CuotaSemanal AS NVARCHAR(11)) + ', ' +
									   'Monto: ' + CAST(@Monto AS NVARCHAR(11)) + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Cuotas', 'I', @vDetalle, @Vfecha, @Usuario;

                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Cuota registrada exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al registrar la cuota.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END
