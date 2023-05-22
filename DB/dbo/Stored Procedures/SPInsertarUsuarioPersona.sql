CREATE   PROCEDURE [dbo].[SPInsertarUsuarioPersona]
(
  @IdRol INT
, @CoreoElectronico NVARCHAR (100)
, @ContrasenaTemporal VARCHAR (150)
, @IdPlanta INT
, @Identificacion INT
, @IdTipoIdentificacion INT
, @Nombre NVARCHAR (50)
, @PrimerApellido NVARCHAR (50)
, @SegundoApellido NVARCHAR (50)
, @FechaNacimiento DATE
, @Direccion NVARCHAR (100)
, @Telefono NVARCHAR (10)
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)
AS

	BEGIN
			BEGIN TRY
				BEGIN TRAN INSERTAR
					BEGIN
						DECLARE @IdPersona INT


						INSERT INTO Personas
						(
							Identificacion
							, IdTipoIdentificacion
							, Nombre
							, PrimerApellido
							, SegundoApellido
							, FechaNacimiento
							, Direccion
							, Telefono
							, Estado
							, FechaCreacion
							, UsuarioCreacion
							, Accion
						) VALUES 
						(
							@Identificacion
							, @IdTipoIdentificacion
							, @Nombre
							, @PrimerApellido
							, @SegundoApellido
							, @FechaNacimiento
							, @Direccion
							, @Telefono
							, 1
							, GETDATE()
							, '1'
							, 'I'
						)

					SET @IdPersona = (SELECT IdPersona FROM Personas WHERE Identificacion = @Identificacion)

					INSERT INTO Usuarios

							( IdPersona
							, IdRol
							, CoreoElectronico
							, ContrasenaTemporal
							, Estado
							, IdSucursal
							, FechaCreacion
							, UsuarioCreacion
							, Accion )

							VALUES 
						
							( @IdPersona
							, @IdRol
							, @CoreoElectronico
							, ENCRYPTBYPASSPHRASE('PANABLOCK', @ContrasenaTemporal)
							, 1
							, @IdPlanta
							, GETDATE()
							, '1'
							, 'I' 
						)
					END

					COMMIT TRAN INSERTAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Exito: Usuario registrado exiosamente'
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION INSERTAR
			END CATCH

	END
