CREATE PROCEDURE [dbo].[SPObtenerDetalleUsuarioNombre]
( @Nombre VARCHAR(50) )
AS

	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		U.IdUsuario
							, U.CoreoElectronico
							, CONVERT(VARCHAR(150), DECRYPTBYPASSPHRASE('PANABLOCK', U.ContrasenaTemporal)) AS ContrasenaTemporal
							, CONVERT(VARCHAR(150), U.Contrasena) AS Contrasena
							, U.Estado
							, U.FechaCreacion
							, U.FechaModificacion
							, U.UsuarioCreacion
							, U.UsuarioModificacion
							, U.Accion
							, P.IdPersona
							, P.Nombre
							, P.PrimerApellido
							, P.SegundoApellido
							, P.Identificacion
							, R.IdRol
							, R.Descripcion
							, PL.IdPlanta
							, PL.NombrePlanta

				FROM		Usuarios U   WITH (NOLOCK) 
		
				INNER JOIN	Personas P
				ON			U.IdPersona = P.IdPersona

				INNER JOIN	Roles R
				ON			U.IdRol = R.IdRol

				INNER JOIN	Plantas PL
				ON			U.IdPlanta = PL.IdPlanta

				WHERE		P.Nombre = @Nombre

			END

			END TRY
			BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
