CREATE PROCEDURE [dbo].[SPObtenerDetalleEstadoPlan]
( @IdEstadoPlan INT )
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		 
					E.IdEstadoPlan
					, E.CodEstadoPlan
					, E.DescEstadoPlan
					, E.FechaCreacion
					, CASE WHEN E.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM EstadosPlan E WITH (NOLOCK)
				WHERE E.IdEstadoPlan = @IdEstadoPlan
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END