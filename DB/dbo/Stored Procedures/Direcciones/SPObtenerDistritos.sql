CREATE   PROCEDURE [dbo].SPObtenerDistritos
@id_canton INT
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		id_Distrito,
							dsc_Distrito
				
							--, CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM		Distritos WITH (NOLOCK) 
				WHERE id_Canton = @id_canton
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

