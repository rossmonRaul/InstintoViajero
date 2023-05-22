--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Obtener Persona
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerPersonas]
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