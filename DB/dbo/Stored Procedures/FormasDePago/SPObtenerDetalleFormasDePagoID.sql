CREATE PROCEDURE [dbo].SPObtenerDetalleFormasDePagoID

( @id INT )

AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		
					FP.id
					, FP.CodFormaDePago					
					, FP.Descripcion					
					, CASE WHEN FP.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado					
					, CONVERT(date, COALESCE(FP.FechaCreacion, GETDATE())) As FechaCreacion
					, CONVERT(date, COALESCE(FP.FechaModificacion, GETDATE())) As FechaModificacion
				FROM FormasDePago AS FP WITH (NOLOCK)	
				WHERE		id = @id
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
