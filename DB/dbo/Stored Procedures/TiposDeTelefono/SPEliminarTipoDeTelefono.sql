CREATE PROCEDURE [dbo].[SPEliminarTipoDeTelefono]
( @IdTipoDeTelefono INT
, @Usuario NVARCHAR(MAX) = NULL
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT)

AS
	BEGIN
		DECLARE @ESTADO_ACTUAL BIT;
		DECLARE @Vfecha DATETIME;
		SET @Vfecha = GETDATE();

			BEGIN TRY
				BEGIN TRAN DESACTIVAR
				SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM TiposDeTelefono WHERE IdTipoDeTelefono = @IdTipoDeTelefono)
					BEGIN
						UPDATE TiposDeTelefono SET
						Estado = CASE WHEN @ESTADO_ACTUAL = 1 THEN 0 ELSE 1 END
					  , FechaModificacion = @Vfecha
					  , UsuarioModificacion = @Usuario
					  WHERE IdTipoDeTelefono = @IdTipoDeTelefono

					  -- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(MAX);
						DECLARE @vAccion NVARCHAR(1);
						SET @vDetalle = 'IdTipoDeTelefono: ' + CAST(@IdTipoDeTelefono AS NVARCHAR(12)) ;
						SET @vAccion = CASE WHEN @ESTADO_ACTUAL = 1 THEN 'E' ELSE 'A' END

						EXEC [dbo].[SPInsertarBitacora] 'TiposDeTelefono', @vAccion, @vDetalle, @Vfecha, @Usuario;

					END
					COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE =(
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'El tipo de teléfono fue desactivado exitosamente.'
										 ELSE 'El tipo de teléfono estado fue reactivado exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error al eliminar el tipo de teléfono.' --+ ERROR_MESSAGE()
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH
	END
