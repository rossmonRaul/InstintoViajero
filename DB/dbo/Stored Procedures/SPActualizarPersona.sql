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
			DECLARE @Vfecha DATETIME;
			SET @Vfecha = GETDATE();

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
						, FechaModificacion = @Vfecha
						, UsuarioModificacion = '1'
						WHERE IdPersona = @IdPersona

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(MAX);						
						SET @vDetalle = 'IdPersona: ' + CAST(@IdPersona AS NVARCHAR(12)) + ', ' +
									   'Identificacion: ' + CAST(@Identificacion AS NVARCHAR(20)) + ', ' +
									   'IdTipoIdentificacion: ' + CAST(@IdTipoIdentificacion AS NVARCHAR(2)) + ', ' +
									   'Nombre: ' + @Nombre + ', ' +
									   'PrimerApellido: ' + @PrimerApellido + ', ' +
									   'SegundoApellido: ' + @SegundoApellido + ', ' +
									   'FechaNacimiento: ' + CAST(@FechaNacimiento AS NVARCHAR(12)) + ', ' +
									   'Direccion: ' + @Direccion + ', ' +
									   'Telefono: ' + @Telefono + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Personas', 'A', @vDetalle, @Vfecha, '1';
						--

					END
					COMMIT TRAN ACTUALIZAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Exito: Persona actualizada exitosamente'
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
END
