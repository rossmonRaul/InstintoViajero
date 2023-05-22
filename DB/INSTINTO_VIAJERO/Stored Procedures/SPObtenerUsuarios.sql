--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Obtener Usuario
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerUsuarios]
AS

	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		U.IdUsuario
							, CASE WHEN U.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
							, U.FechaCreacion
							, P.IdPersona
							, P.Nombre
							, P.PrimerApellido
							, P.SegundoApellido
							, R.Descripcion
							, S.NombreSucursal 

				FROM		Usuarios U WITH (NOLOCK)
		
				INNER JOIN	Personas P
				ON			U.IdPersona = P.IdPersona

				INNER JOIN	Roles R
				ON			U.IdRol = R.IdRol

				INNER JOIN	Sucursales S
				ON			U.IdSucursal = S.IdSucursal

			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END