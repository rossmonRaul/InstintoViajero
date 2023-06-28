create   PROCEDURE [dbo].SPEliminarFormasDePago
( @ID INT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT )
AS
		BEGIN
			DECLARE @ESTADO_ACTUAL BIT;
			BEGIN TRY
				BEGIN TRAN DESACTIVAR

				SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM FormasDePago WHERE id = @ID)
					BEGIN
					UPDATE		
					FormasDePago SET
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
					'FormasDePago',
					'DESACTIVAR', 
					'SE DESACTIVA UNA FORMA DE PAGO', 
					GETDATE(), 
					'1'
				);
				
		COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE = (
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'La Forma de Pago fue desactivada exitosamente.'
										 ELSE 'La Forma de Pago fue reactivada exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error al cambiar estado de la forma de pago.'
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH
	END
