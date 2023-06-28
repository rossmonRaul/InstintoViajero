CREATE PROCEDURE [dbo].[SPActualizarRegalia]

( @IdRegalia INT
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
                        UPDATE        Regalias SET
									  Descripcion = @Descripcion
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdRegalia = @IdRegalia

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdRegalia: ' + CAST(@IdRegalia AS NVARCHAR(12)) + ', ' + 									  
									   'Descripcion: ' + CAST(@Descripcion AS NVARCHAR(30)) + ', ' +
                                       'UsuarioModificacion: ' + @Usuario + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Regalias', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Estado actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el estado.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END
