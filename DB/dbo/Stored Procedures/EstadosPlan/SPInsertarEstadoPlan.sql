CREATE PROCEDURE [dbo].[SPInsertarEstadoPlan]

( 
  @CodEstadoPlan NVARCHAR(16)
, @DescEstadoPlan NVARCHAR(30)
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
                BEGIN TRAN INSERTAR
                    BEGIN
                        INSERT INTO EstadosPlan
                        (
                             CodEstadoPlan
                            , DescEstadoPlan
                            , Estado
                            , FechaCreacion
                            , UsuarioCreacion                            
                        ) VALUES 
                        (
                            @CodEstadoPlan
                            , @DescEstadoPlan
                            , 1
                            , @Vfecha
                            , @Usuario
                        )

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'CodEstadoPlan: ' + CAST(@CodEstadoPlan AS NVARCHAR(12)) + ', ' +
                                       'DescEstadoPlan: ' + @DescEstadoPlan + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'EstadosPlan', 'I', @vDetalle, @Vfecha, @Usuario;

                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Estado registrado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al registrar el estado.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END