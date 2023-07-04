CREATE PROCEDURE [dbo].[SPEliminarFechaEspecificaDePago]
( @IdFechaEspecificaDePago INT
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
				SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM FechasEspecificasDePago WHERE IdFechaEspecificaDePago = @IdFechaEspecificaDePago)
					BEGIN
						UPDATE FechasEspecificasDePago SET
						Estado = CASE WHEN @ESTADO_ACTUAL = 1 THEN 0 ELSE 1 END
					  , FechaModificacion = @Vfecha
					  , UsuarioModificacion = @Usuario
					  WHERE IdFechaEspecificaDePago = @IdFechaEspecificaDePago

					  -- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(MAX);
						DECLARE @vAccion NVARCHAR(1);
						SET @vDetalle = 'IdFechaEspecificaDePago: ' + CAST(@IdFechaEspecificaDePago AS NVARCHAR(12)) ;
						SET @vAccion = CASE WHEN @ESTADO_ACTUAL = 1 THEN 'E' ELSE 'A' END

						EXEC [dbo].[SPInsertarBitacora] 'FechasEspecificasDePago', @vAccion, @vDetalle, @Vfecha, @Usuario;

					END
					COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE =(
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'La fecha fue desactivada exitosamente.'
										 ELSE 'La fecha fue reactivada exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error al eliminar la fecha.' --+ ERROR_MESSAGE()
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH
	END
