CREATE PROCEDURE [dbo].[SPActualizarCorreoElectronico]

( @IdCorreoElectronico INT
, @IdPersona INT
, @CorreoElectronico NVARCHAR(9)
, @Principal BIT
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
                        UPDATE        CorreosElectronicos SET
									  IdPersona = @IdPersona
									, CorreoElectronico = @CorreoElectronico
                                    , Principal = @Principal
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdCorreoElectronico = @IdCorreoElectronico

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdCorreoElectronico: ' + CAST(@IdCorreoElectronico AS NVARCHAR(12)) + ', ' + 
									    'IdPersona: ' +  CAST(@IdPersona AS NVARCHAR(12)) + ', ' +
									    'CorreoElectronico: ' + @CorreoElectronico + ', ' +
                                        'Principal: ' + CAST(@Principal AS NVARCHAR(1)) +
                                        'UsuarioModificacion: ' + @Usuario + ', ' +
									    'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'CorreosElectronicos', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'El email ha sido actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el email.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END