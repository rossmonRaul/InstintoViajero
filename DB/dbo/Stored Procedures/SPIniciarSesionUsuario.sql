CREATE   PROCEDURE [dbo].[SPIniciarSesionUsuario]

( @ContrasenaTemporal NVARCHAR (150)
, @CoreoElectronico NVARCHAR (100) )

AS

	BEGIN

	DECLARE @EsPrimeraSesion BIT

			
		--SI ME ESTA ENVIANDO LA CONTRASEÑA PERSONALIZADA
		IF			EXISTS 
			(SELECT		1 FROM Usuarios  
			WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) = @ContrasenaTemporal
			AND			CoreoElectronico = @CoreoElectronico
			AND			Estado = 1)

			BEGIN

				SET @EsPrimeraSesion = 0

				SELECT		P.Nombre
							, P.PrimerApellido 
							, P.SegundoApellido
							, R.Descripcion
							, @EsPrimeraSesion AS EsPrimeraSeccion
							,S.IdSucursal
							,S.NombreSucursal AS NombreSucursal
							,U.IdUsuario

				FROM			Usuarios U

				INNER JOIN	Personas P
				ON			U.IdPersona = P.IdPersona

				INNER JOIN	Roles R
				ON			U.IdRol = R.IdRol

				INNER JOIN Sucursales S
				ON			S.IdSucursal = U.IdSucursal

				WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) = @ContrasenaTemporal
				AND			U.CoreoElectronico   = @CoreoElectronico
				AND			U.Estado = 1
				
			END

		ELSE IF
	    --Si me esta mandando la contraseña temporal
		-- Primer inicio de sesion
				EXISTS
				(SELECT		1 FROM Usuarios  
				WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', ContrasenaTemporal)) = @ContrasenaTemporal
				AND			CoreoElectronico = @CoreoElectronico
				AND			Estado = 1)
				BEGIN
						--Si la contraseña temporal coincide y no tiene constraseña normal
						IF EXISTS(SELECT * FROM Usuarios  
						WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', ContrasenaTemporal)) = @ContrasenaTemporal
						AND			CoreoElectronico = @CoreoElectronico
						AND  (CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena))  IS NULL OR CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) = '')
						AND		Estado = 1)
						BEGIN
						
							--Es primer inicio de sesion
							SET @EsPrimeraSesion = 1

							SELECT		P.Nombre
										, P.PrimerApellido 
										, P.SegundoApellido
										, R.Descripcion
										, @EsPrimeraSesion as EsPrimeraSesion
										,S.IdSucursal
										,S.NombreSucursal AS NombreSucursal
										,U.IdUsuario

							FROM			Usuarios U

							INNER JOIN	Personas P
							ON			U.IdPersona = P.IdPersona

							INNER JOIN	Roles R
							ON			U.IdRol = R.IdRol

							INNER JOIN Sucursales S
				           ON			S.IdSucursal = U.IdSucursal

							WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', ContrasenaTemporal)) = @ContrasenaTemporal
							AND			U.CoreoElectronico   = @CoreoElectronico
							AND			U.Estado = 1

							
							
						END

						--Si la contraseña temporal coincide y PERO NO COINCIDE CON LA  constraseña normal
						IF EXISTS(SELECT * FROM Usuarios  
						WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', ContrasenaTemporal)) = @ContrasenaTemporal
						AND			CoreoElectronico = @CoreoElectronico
						AND (CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena))  IS NOT NULL OR CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) != '') --> Si existe una contaseña normal
						AND CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) != @ContrasenaTemporal --> Pero no coincide con la contraseña ingresada
						AND		Estado = 1)
						BEGIN
							SET @EsPrimeraSesion = 0

							SELECT		P.Nombre
										, P.PrimerApellido 
										, P.SegundoApellido
										, R.Descripcion
										, @EsPrimeraSesion as EsPrimeraSesion
										,S.IdSucursal
										,S.NombreSucursal AS NombreSucursal
										,U.IdUsuario

							FROM			Usuarios U

							INNER JOIN	Personas P
							ON			U.IdPersona = P.IdPersona

							INNER JOIN	Roles R
							ON			U.IdRol = R.IdRol

							INNER JOIN Sucursales S
			             	ON			S.IdSucursal = U.IdSucursal

							WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', ContrasenaTemporal)) = @ContrasenaTemporal
							AND			U.CoreoElectronico   = @CoreoElectronico
							AND			U.Estado = 1
							AND			1 = 2 --> Lista vacia se niega login
							
						END 
				END
		
		--Si la contraseña temporal NO coincide y  NO COINCIDE CON LA  constraseña normal
		IF  EXISTS(SELECT * FROM Usuarios  
		WHERE		CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', ContrasenaTemporal)) != @ContrasenaTemporal
		AND			CoreoElectronico = @CoreoElectronico
		AND (CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena))  IS NOT NULL OR CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) != '') --> Si existe una contaseña normal
		AND CONVERT(varchar(MAX), DECRYPTBYPASSPHRASE('INSTINTOVIAJERO', Contrasena)) != @ContrasenaTemporal --> Pero no coincide con la contraseña ingresada
		AND		Estado = 1)

				--No coincide la contraseña ni con la temporal ni con la personalizada
					BEGIN
					SELECT		P.Nombre
										, P.PrimerApellido 
										, P.SegundoApellido
										, R.Descripcion
										, @EsPrimeraSesion as EsPrimeraSesion
										,S.IdSucursal
										,S.NombreSucursal AS NombreSucursal
										,U.IdUsuario

							FROM			Usuarios U

							INNER JOIN	Personas P
							ON			U.IdPersona = P.IdPersona

							INNER JOIN	Roles R
							ON			U.IdRol = R.IdRol

							INNER JOIN Sucursales S
				           ON			S.IdSucursal = U.IdSucursal

							WHERE		1 = 2 --Lista vacia se niega login
							
					END


			

	END
