CREATE PROCEDURE [dbo].[SPObtenerProductos]

AS
BEGIN
		BEGIN TRY
			BEGIN
				SELECT		
					P.id
					, P.Nombre
					, P.CodProducto
					, P.IdTipo	
					, TP.DesTipoProducto
					, CASE WHEN P.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado					
					, CONVERT(date, COALESCE(P.FechaCreacion, GETDATE())) As FechaCreacion
					, CONVERT(date, COALESCE(P.FechaModificacion, GETDATE())) As FechaModificacion
				FROM Productos AS P WITH (NOLOCK)
				INNER JOIN dbo.TiposProductos AS TP 
					ON TP.id = P.id

			END

			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
