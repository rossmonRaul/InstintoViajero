CREATE   PROCEDURE [dbo].[SPObtenerDetalleUsuario]
( @IdUsuario INT )
AS

	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		U.IdUsuario
							, U.CoreoElectronico
							, CONVERT(VARCHAR(150), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', U.ContrasenaTemporal)) AS ContrasenaTemporal
							, CONVERT(VARCHAR(150), U.Contrasena) AS Contrasena
							, CASE WHEN U.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
							, U.FechaCreacion
							, U.FechaModificacion
							, U.UsuarioCreacion
							, U.UsuarioModificacion
							, P.IdPersona
							, P.Nombre
							, P.PrimerApellido
							, P.SegundoApellido
							, P.Identificacion
							, R.IdRol
							, R.Descripcion
							, S.IdSucursal
							, S.NombreSucursal

				FROM		Usuarios U   WITH (NOLOCK) 
		
				INNER JOIN	Personas P
				ON			U.IdPersona = P.IdPersona

				INNER JOIN	Roles R
				ON			U.IdRol = R.IdRol

				INNER JOIN	Sucursales S
				ON			U.IdSucursal = S.IdSucursal

				WHERE		U.IdUsuario = @IdUsuario

			END

			END TRY
			BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
