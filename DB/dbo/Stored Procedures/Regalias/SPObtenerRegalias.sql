CREATE PROCEDURE [dbo].[SPObtenerRegalias]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT	
					R.IdRegalia
					,R.Descripcion
					, R.FechaCreacion

					, CASE WHEN R.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					FROM Regalias R WITH (NOLOCK)
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

