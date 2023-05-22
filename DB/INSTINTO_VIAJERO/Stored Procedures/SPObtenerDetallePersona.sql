CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerDetallePersona]
( @Identificacion INT )
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
				P.Direccion,
				P.Telefono, 
				P.Estado,
				P.FechaCreacion,
				P.FechaModificacion,
				P.UsuarioCreacion,
				P.UsuarioModificacion,
				P.Accion,
				T.IdTipoIdentificacion,
				T.Descripcion
				FROM		 Personas P WITH (NOLOCK) 
				INNER JOIN	 TiposIdentificacion T
				ON			 P.IdTipoIdentificacion = T.IdTipoIdentificacion
				WHERE		 P.Identificacion = @Identificacion
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END