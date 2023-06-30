CREATE   PROCEDURE [dbo].[SPInsertarPersona]

( @Identificacion INT
, @IdTipoIdentificacion INT
, @Nombre NVARCHAR (50)
, @PrimerApellido NVARCHAR (50)
, @SegundoApellido NVARCHAR (50)
, @Profesion  NVARCHAR(100)
, @IdProvincia	INT			
, @IdCanton		INT
, @IdDistrito	INT			
, @FechaNacimiento DATE
, @Direccion NVARCHAR (100)
, @Estado BIT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)

AS

	BEGIN

		DECLARE @Vfecha DATETIME;
		SET @Vfecha = GETDATE();

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
							, Profesion
							, IdProvincia
							, IdCanton
							, IdDistrito
							, FechaNacimiento
							, DireccionHabitacion
							, Estado
							, FechaCreacion
							, UsuarioCreacion
						) VALUES 
						(
							@Identificacion
							, @IdTipoIdentificacion
							, @Nombre
							, @PrimerApellido
							, @SegundoApellido
							, @Profesion
							, @IdProvincia
							, @IdCanton
							, @IdDistrito
							, @FechaNacimiento
							, @Direccion
							, @Estado
							, @Vfecha
							, '1'
						)

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(MAX);						
						SET @vDetalle = 'Identificacion: ' + CAST(@Identificacion AS NVARCHAR(20)) + ', ' +
									   'IdTipoIdentificacion: ' + CAST(@IdTipoIdentificacion AS NVARCHAR(2)) + ', ' +
									   'Nombre: ' + @Nombre + ', ' +
									   'PrimerApellido: ' + @PrimerApellido + ', ' +
									   'SegundoApellido: ' + @SegundoApellido + ', ' +
									   'Profesion: ' + @Profesion + ', ' +
									   'IdProvincia: ' + CAST(@IdProvincia AS NVARCHAR(2)) + ', ' +
									   'IdCanton: ' + CAST(@IdCanton AS NVARCHAR(2)) + ', ' +
									   'IdDistrito: ' + CAST(@IdDistrito AS NVARCHAR(2)) + ', ' +
									   'FechaNacimiento: ' + CAST(@FechaNacimiento AS NVARCHAR(12)) + ', ' +
									   'DireccionHabitacion: ' + @Direccion + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Personas', 'I', @vDetalle, @Vfecha, '1';

					END

					COMMIT TRAN INSERTAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Persona insertada exitosamente'
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error al insertar persona.' --+ ERROR_MESSAGE()
				ROLLBACK TRANSACTION INSERTAR
			END CATCH

	END
