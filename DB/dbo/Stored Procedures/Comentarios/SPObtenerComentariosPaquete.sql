CREATE PROCEDURE [dbo].[SPObtenerComentariosPaquete]
( @IdPaquete INT )

AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		
					C.IdComentarioPaquete
					, C.IdPaquete					
					, C.Comentario	
					, CASE WHEN C.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado					
					, CONVERT(date, COALESCE(C.FechaCreacion, GETDATE())) As FechaCreacion
					, CONVERT(date, COALESCE(C.FechaModificacion, GETDATE())) As FechaModificacion
				FROM ComentariosPaquete AS C WITH (NOLOCK)	
				WHERE		IdPaquete = @IdPaquete
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
