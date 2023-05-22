--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Obtener Rol
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerRolPorEstado]
(
@estado bit 
)
AS
	BEGIN
		BEGIN TRY
			BEGIN
				select * from
				Roles WITH (NOLOCK)
				where Estado=1
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
END