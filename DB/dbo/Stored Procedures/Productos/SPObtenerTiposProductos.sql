CREATE   PROCEDURE [dbo].[SPObtenerTiposProductos]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		id
							,CodTipoProducto
							, DesTipoProducto
							--, CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM		TiposProductos WITH (NOLOCK) 
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

