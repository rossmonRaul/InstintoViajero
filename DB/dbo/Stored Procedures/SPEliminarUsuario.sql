CREATE   PROCEDURE [dbo].[SPEliminarUsuario]

( @IdUsuario INT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)

AS

	BEGIN
		DECLARE @ESTADO_ACTUAL BIT;
			BEGIN TRY
				BEGIN TRAN DESACTIVAR
					BEGIN
					SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM Usuarios WHERE IdUsuario = @IdUsuario)
						UPDATE		 Usuarios SET
									 Estado = CASE WHEN @ESTADO_ACTUAL = 1 THEN 0 ELSE 1 END
									 , FechaModificacion = GETDATE()
									 , UsuarioModificacion = '1'
						WHERE		 IdUsuario = @IdUsuario
					END
		
					COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE = (
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'El usuario fue desactivado exitosamente.'
										 ELSE 'El usuario fue reactivado exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error al cambiar estado del usuario.'
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH

	END
