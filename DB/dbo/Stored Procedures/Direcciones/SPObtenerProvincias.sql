CREATE   PROCEDURE [dbo].[SPObtenerProvincias]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		id_Provincia,
							dsc_Provincia
							--, CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM Provincias WITH (NOLOCK) 
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

