CREATE PROCEDURE [dbo].[SPActualizarTipoDeTelefono]

( @IdTipoDeTelefono INT
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
                        UPDATE        TiposDeTelefono SET
									  Descripcion = @Descripcion
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdTipoDeTelefono = @IdTipoDeTelefono

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdTipoDeTelefono: ' + CAST(@IdTipoDeTelefono AS NVARCHAR(12)) + ', ' + 
									   'Descripcion: ' + @Descripcion + ', ' +
                                       'UsuarioModificacion: ' + @Usuario + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'TiposDeTelefono', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'El tipo de teléfono ha sido actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el tipo de teléfono.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END