--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Se lista Tipo de Identificacion
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerTiposIdentificacion]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		IdTipoIdentificacion
							, Descripcion
							, CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM		TiposIdentificacion WITH (NOLOCK) 
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END