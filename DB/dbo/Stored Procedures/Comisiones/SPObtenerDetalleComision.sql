CREATE PROCEDURE [dbo].[SPObtenerDetalleComision]

( @IdComision INT )

AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		
					C.IdComision
					, C.IdRol					
					, C.Descripcion	
					, C.PorcentajeComision 
					, CASE WHEN C.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado					
					, CONVERT(date, COALESCE(C.FechaCreacion, GETDATE())) As FechaCreacion
					, CONVERT(date, COALESCE(C.FechaModificacion, GETDATE())) As FechaModificacion
				FROM Comisiones AS C WITH (NOLOCK)	
				WHERE		IdComision = @IdComision
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
