CREATE   PROCEDURE [dbo].SPObtenerCantones
@id_provincia int
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		id_Canton,
							dsc_Canton
							--, CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM		Cantones WITH (NOLOCK) 
				WHERE id_Provincia = @id_provincia
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

