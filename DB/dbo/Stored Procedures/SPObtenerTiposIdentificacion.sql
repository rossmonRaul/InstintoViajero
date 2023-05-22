CREATE   PROCEDURE [dbo].[SPObtenerTiposIdentificacion]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		IdTipoIdentificacion
							, Descripcion
							, CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM		TiposIdentificacion WITH (NOLOCK) 
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

