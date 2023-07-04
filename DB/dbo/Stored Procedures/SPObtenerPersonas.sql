CREATE   PROCEDURE [dbo].[SPObtenerPersonas]

AS

	BEGIN
		BEGIN TRY
			BEGIN
				SELECT	
					P.IdPersona
					, P.Identificacion
					, P.Nombre
     				, P.PrimerApellido
					, P.SegundoApellido
					, P.Profesion
					, P.IdProvincia
					, P.IdCanton
					, P.IdDistrito
					, P.DireccionHabitacion AS Direccion
					, P.FechaNacimiento
					, CASE WHEN P.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					, P.FechaCreacion
					, T.Descripcion
					FROM Personas P WITH (NOLOCK)
					INNER JOIN	 TiposIdentificacion T
					ON P.IdTipoIdentificacion = T.IdTipoIdentificacion
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END
