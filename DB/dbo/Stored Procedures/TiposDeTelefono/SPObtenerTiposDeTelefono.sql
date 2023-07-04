CREATE PROCEDURE [dbo].[SPObtenerTiposDeTelefono]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT	
					T.IdTipoDeTelefono
					,T.Descripcion
					, T.FechaCreacion

					, CASE WHEN T.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					FROM TiposDeTelefono T WITH (NOLOCK)
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

