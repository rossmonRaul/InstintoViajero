CREATE   PROCEDURE [dbo].[SPActualizarPersona]
	( @IdPersona INT
	, @Identificacion INT
	, @IdTipoIdentificacion INT
	, @Nombre NVARCHAR (50)
	, @PrimerApellido NVARCHAR (50)
	, @SegundoApellido NVARCHAR (50)
	, @FechaNacimiento DATE
	, @Direccion NVARCHAR (100)
	, @Telefono NVARCHAR (10)
	, @Estado varchar(25)
	,@INDICADOR INT OUT
	,@MENSAJE VARCHAR(50) OUT
	)
	AS
	BEGIN
			BEGIN TRY
				BEGIN TRAN ACTUALIZAR
					BEGIN
						UPDATE Personas SET
						Identificacion = @Identificacion
						, IdTipoIdentificacion = @IdTipoIdentificacion
						, Nombre = @Nombre
						, PrimerApellido = @PrimerApellido
						, SegundoApellido = @SegundoApellido
						, FechaNacimiento = @FechaNacimiento
						, Direccion = @Direccion
						, Telefono = @Telefono
						, Estado = @Estado
						, FechaModificacion = GETDATE()
						, UsuarioModificacion = '1'
						WHERE IdPersona = @IdPersona
					END
					COMMIT TRAN ACTUALIZAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Exito: Persona actualizada exiosamente'
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
END
