CREATE   PROCEDURE [dbo].[SPInsertarPersona]

( @Identificacion INT
, @IdTipoIdentificacion INT
, @Nombre NVARCHAR (50)
, @PrimerApellido NVARCHAR (50)
, @SegundoApellido NVARCHAR (50)
, @FechaNacimiento DATE
, @Direccion NVARCHAR (100)
, @Telefono NVARCHAR (10)
, @Estado BIT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)

AS

	BEGIN
			BEGIN TRY
				BEGIN TRAN INSERTAR
					BEGIN
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
							, @Estado
							, GETDATE()
							, '1'
							, 'I'
						)

					END

					COMMIT TRAN INSERTAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Exito: Persona insertada exiosamente'
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION INSERTAR
			END CATCH

	END
