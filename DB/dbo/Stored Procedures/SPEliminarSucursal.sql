create   PROCEDURE [dbo].[SPEliminarSucursal]
( @IdSucursal INT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT )
AS
		BEGIN
			DECLARE @ESTADO_ACTUAL BIT;
			BEGIN TRY
				BEGIN TRAN DESACTIVAR
				SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM Sucursales WHERE IdSucursal = @IdSucursal)
					BEGIN
					UPDATE		
					Sucursales SET
					Estado =  CASE WHEN @ESTADO_ACTUAL = 1 THEN 0 ELSE 1 END
				  , FechaModificacion = GETDATE()
				  , UsuarioModificacion = '1'
				  WHERE	IdSucursal = @IdSucursal
				  END
				
		COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE = (
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'La planta fue desactivada exitosamente.'
										 ELSE 'La Sucursal fue reactivada exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error al cambiar el estado de la surcursal.'
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH
	END
