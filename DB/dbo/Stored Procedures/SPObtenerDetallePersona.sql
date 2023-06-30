CREATE   PROCEDURE [dbo].[SPObtenerDetallePersona]
( @IdPersona INT )
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		 
				P.IdPersona,
				P.Identificacion,
				P.Nombre,
				P.PrimerApellido,
				P.SegundoApellido,
				P.FechaNacimiento,
				P.Profesion,
				P.IdProvincia,
				P.IdCanton,
				P.IdDistrito,
				P.DireccionHabitacion as Direccion,
				P.Estado,
				P.FechaCreacion,
				P.FechaModificacion,
				P.UsuarioCreacion,
				P.UsuarioModificacion,
				T.IdTipoIdentificacion,
				T.Descripcion
				FROM		 Personas P WITH (NOLOCK) 
				INNER JOIN	 TiposIdentificacion T
				ON			 P.IdTipoIdentificacion = T.IdTipoIdentificacion
				WHERE		 P.IdPersona = @IdPersona
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
