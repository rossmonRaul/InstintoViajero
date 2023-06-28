create   PROCEDURE [dbo].SPEliminarTourDeViaje
( @id INT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT )
AS
		BEGIN
			DECLARE @ESTADO_ACTUAL BIT;
			BEGIN TRY
				BEGIN TRAN DESACTIVAR

				SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM TourDeViaje WHERE id = @id)
					BEGIN
					UPDATE		
					TourDeViaje SET
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
					'TourDeViaje',
					'DESACTIVAR', 
					'SE DESACTIVA UNA TOUR DE VIAJE', 
					GETDATE(), 
					'1'
				);
				
		COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE = (
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'El Tour de viaje fue desactivado exitosamente.'
										 ELSE 'El Tour de viaje fue reactivado exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH
	END
