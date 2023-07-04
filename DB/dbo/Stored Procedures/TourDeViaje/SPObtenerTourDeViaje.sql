CREATE PROCEDURE [dbo].SPObtenerTourDeViaje

AS
BEGIN
		BEGIN TRY
			BEGIN
				SELECT		
					TV.id
					, TV.Descripcion
					, TV.Observaciones
					, TV.Precio
					, TV.FechaSalida
					, TV.FechaLLegada				
					, CASE WHEN TV.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado					
					, CONVERT(date, COALESCE(TV.FechaCreacion, GETDATE())) As FechaCreacion
					, CONVERT(date, COALESCE(TV.FechaModificacion, GETDATE())) As FechaModificacion
				FROM TourDeViaje AS TV WITH (NOLOCK)			

			END

			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
