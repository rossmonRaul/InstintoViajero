CREATE PROCEDURE [dbo].[SPActualizarTelefono]

( @IdTelefono INT
, @IdTipoDeTelefono INT
, @IdPersona INT
, @Numero NVARCHAR(9)
, @Descripcion NVARCHAR(30)
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
                        UPDATE        Telefonos SET
									  IdTipoDeTelefono = @IdTipoDeTelefono
									, IdPersona = @IdPersona
									, Numero = @Numero
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdTelefono = @IdTelefono

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdTelefono: ' + CAST(@IdTelefono AS NVARCHAR(12)) + ', ' + 
									    'IdTipoDeTelefono: ' +  CAST(@IdTipoDeTelefono AS NVARCHAR(12)) + ', ' +
									    'IdPersona: ' +  CAST(@IdPersona AS NVARCHAR(12)) + ', ' +
									    'Numero: ' + @Numero + ', ' +
                                        'UsuarioModificacion: ' + @Usuario + ', ' +
									    'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Telefonos', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'El teléfono ha sido actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el teléfono.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END