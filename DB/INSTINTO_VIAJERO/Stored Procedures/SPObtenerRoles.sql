--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Obtener Rol
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerRoles]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		IdRol
							, Descripcion
							, CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
							, FechaCreacion
				FROM Roles WITH (NOLOCK)
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END