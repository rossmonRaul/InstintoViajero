CREATE PROCEDURE [dbo].[SPObtenerComentariosClubDeViaje]
( @IdClubDeViaje INT )

AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		
					C.IdComentarioClubDeViaje
					, C.IdClubDeViaje					
					, C.Comentario	
					, CASE WHEN C.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado					
					, CONVERT(date, COALESCE(C.FechaCreacion, GETDATE())) As FechaCreacion
					, CONVERT(date, COALESCE(C.FechaModificacion, GETDATE())) As FechaModificacion
				FROM ComentariosClubDeViaje AS C WITH (NOLOCK)	
				WHERE		IdClubDeViaje = @IdClubDeViaje
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
