CREATE PROCEDURE [dbo].[SPActualizarComentarioPaquete]
( 
  @IdComentarioPaquete INT 
, @Comentario NVARCHAR(MAX)
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
							UPDATE dbo.[ComentariosPaquete] SET
															
								Comentario = @Comentario
								, Estado = @Estado
                                , FechaModificacion = @Vfecha
                                , UsuarioModificacion = @Usuario
                                WHERE IdComentarioPaquete = @IdComentarioPaquete                        
							

							-- Ejecuta SPInsertarBitacora
							DECLARE @vDetalle NVARCHAR(600);						
							SET @vDetalle = 'Comentario: ' + @Comentario + ', ' +
										    'Estado: ' + CAST(@Estado AS NVARCHAR(1));

							EXEC [dbo].[SPInsertarBitacora] 'ComentariosPaquete', 'I', @vDetalle, @Vfecha, @Usuario;					
                    END

                    COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Comentario actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el comentario.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END