CREATE PROCEDURE [dbo].[SPActualizarFechaEspecificaDePago]

( @IdFechaEspecificaDePago INT
, @IdClubDeViaje INT
, @FechaDePago DATETIME
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
                        UPDATE        FechasEspecificasDePago SET
									 IdClubDeViaje = IdClubDeViaje
									, FechaDePago = @FechaDePago
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdFechaEspecificaDePago = @IdFechaEspecificaDePago

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdClubDeViaje: ' +  CAST(@IdClubDeViaje AS NVARCHAR(12)) + ', ' +
									    'FechaDePago: ' + CAST(@FechaDePago AS NVARCHAR(15)) + ', ' +
                                        'UsuarioModificacion: ' + @Usuario + ', ' +
									    'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'FechasEspecificasDePago', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'La fecha específica de pago ha sido actualizada exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar la fecha específica de pago.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END