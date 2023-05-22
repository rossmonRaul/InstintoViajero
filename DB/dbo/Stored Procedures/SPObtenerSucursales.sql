create   PROCEDURE [dbo].[SPObtenerSucursales]

AS
BEGIN
		BEGIN TRY
			BEGIN
				SELECT		IdSucursal
							, NombreSucursal
							, CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
							, Ubicacion
							, CONVERT(date, COALESCE(FechaCreacion, GETDATE())) As FechaCreacion
				FROM		Sucursales WITH (NOLOCK)
			END

			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
