CREATE PROCEDURE [dbo].[SPActualizarBeneficiarioPaquete]

( @IdBeneficiarioPaquete INT
, @IdPaquete INT
, @IdPersona INT
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
                        UPDATE        BeneficiarioPaquetes SET
									  IdPaquete = @IdPaquete
									, IdPersona = @IdPersona
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdBeneficiarioPaquete = @IdBeneficiarioPaquete

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdBeneficiarioPaquete: ' + CAST(@IdBeneficiarioPaquete AS NVARCHAR(12)) + ', ' + 
									   'IdPaquete: ' + CAST(@IdPaquete AS NVARCHAR(12)) + ', ' + 
									   'IdPersona: ' + CAST(@IdPersona AS NVARCHAR(12)) + ', ' + 
                                       'UsuarioModificacion: ' + @Usuario + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'BeneficiarioPaquetes', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Beneficiario actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el beneficiario.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END