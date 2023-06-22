create   PROCEDURE [dbo].SPEliminarPaqueteDeViaje
( @id INT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT )
AS
		BEGIN
			DECLARE @ESTADO_ACTUAL BIT;
			BEGIN TRY
				BEGIN TRAN DESACTIVAR

				SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM PaquetesDeViajes WHERE id = @id)
					BEGIN
					UPDATE		
					PaquetesDeViajes SET
					Estado =  CASE WHEN @ESTADO_ACTUAL = 1 THEN 0 ELSE 1 END
				  , FechaModificacion = GETDATE()
				  , UsuarioModificacion = '1'
				  WHERE	id = @ID
				  END

				INSERT INTO Bitacora(
					Tabla, 
					Accion, 
					Detalle, 
					Fecha,
					Usuario
					)
				VALUES (
					'PaquetesDeViajes',
					'DESACTIVAR', 
					'SE DESACTIVA UNA PAQUETE DE VIAJE', 
					GETDATE(), 
					'1'
				);
				
		COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE = (
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'El paquete de viaje fue desactivado exitosamente.'
										 ELSE 'El paquete de viaje fue reactivado exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH
	END
