CREATE   PROCEDURE [dbo].[SPPrueba]

(@ContrasenaTemporal NVARCHAR (150)
, @CoreoElectronico NVARCHAR (100))

AS

	BEGIN

		IF EXISTS (
			SELECT 1 FROM Usuarios  
			WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) = @ContrasenaTemporal
			AND			CoreoElectronico = @CoreoElectronico
			AND			Estado = 1
		)

			BEGIN

				SELECT		P.Nombre
							, P.PrimerApellido 
							, P.SegundoApellido
							, R.Descripcion

				FROM			Usuarios U

				INNER JOIN	Personas P
				ON			U.IdPersona = P.IdPersona

				INNER JOIN	Roles R
				ON			U.IdRol = R.IdRol

				WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) = @ContrasenaTemporal
				AND			U.CoreoElectronico   = @CoreoElectronico
				AND			U.Estado = 1

			END

		ELSE

			BEGIN

				IF EXISTS (SELECT 1 FROM Usuarios  
				WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', ContrasenaTemporal)) = @ContrasenaTemporal
				AND			CoreoElectronico = @CoreoElectronico
				AND			Estado = 1)

					BEGIN

						UPDATE Usuarios SET
						ContrasenaTemporal = NULL
						, Contrasena = ENCRYPTBYPASSPHRASE('INSTINTOVIAJERO', CONVERT(varbinary (150), @ContrasenaTemporal))
						WHERE
						CoreoElectronico = @CoreoElectronico
						AND
						CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', ContrasenaTemporal)) = @ContrasenaTemporal

						SELECT		P.Nombre
									, P.PrimerApellido 
									, P.SegundoApellido
									, R.Descripcion

						FROM			Usuarios U

						INNER JOIN	Personas P
						ON			U.IdPersona = P.IdPersona

						INNER JOIN	Roles R
						ON			U.IdRol = R.IdRol

						WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) = @ContrasenaTemporal
						AND			U.CoreoElectronico   = @CoreoElectronico
						AND			U.Estado = 1

					END
				
				ELSE

					BEGIN

						IF EXISTS(SELECT		1 FROM Usuarios U 
						WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) = @ContrasenaTemporal
						AND			U.CoreoElectronico = @CoreoElectronico
						AND			U.Estado = 0)

							BEGIN

								-- Usuario inactivo
								SELECT 1

							END

						ELSE

							BEGIN

								-- Usuario y/o contraseña incorrectos
								SELECT 0

							END

					END

			END

	END

		
