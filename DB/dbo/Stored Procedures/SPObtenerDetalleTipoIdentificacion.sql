CREATE   PROCEDURE [dbo].[SPObtenerDetalleTipoIdentificacion]

( @IdTipoIdentificacion INT )

AS

	BEGIN
			BEGIN TRY
				BEGIN
					SELECT		IdTipoIdentificacion
								, Descripcion
								, Estado
					FROM		TiposIdentificacion WITH (NOLOCK)
					WHERE		IdTipoIdentificacion = @IdTipoIdentificacion
				END

			END TRY
			BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
