create PROCEDURE [dbo].[SPObtenerDetalleProductoID]

( @id INT )

AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		*
				FROM		Productos  WITH (NOLOCK) 
				WHERE		id = @id
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
