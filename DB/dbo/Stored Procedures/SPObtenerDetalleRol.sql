CREATE   PROCEDURE [dbo].[SPObtenerDetalleRol]

(@IdRol INT )

AS
BEGIN
			BEGIN TRY
				BEGIN
					SELECT	IdRol
							, Descripcion
							, Estado
							, FechaCreacion
							, FechaModificacion
							, UsuarioCreacion
							, UsuarioModificacion
					FROM		Roles WITH (NOLOCK)
					WHERE		IdRol = @IdRol
					END

			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
