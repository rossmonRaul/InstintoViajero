CREATE PROCEDURE [dbo].[SPObtenerDetallePlazo]
( @IdPlazo INT )
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		 
					E.IdPlazo
					, E.Descripcion
					, E.FechaCreacion
					, CASE WHEN E.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM Plazos E WITH (NOLOCK)
				WHERE E.IdPlazo = @IdPlazo
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END