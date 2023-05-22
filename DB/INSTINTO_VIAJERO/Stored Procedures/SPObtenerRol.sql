--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Obtener Rol
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerRol]
(
@rol varchar(50)
)
as 

BEGIN
		BEGIN TRY
			BEGIN
				Select 
				IdRol,
				Descripcion,
				CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				from Roles  WITH (NOLOCK)
				where Descripcion=@rol
			END

			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
END