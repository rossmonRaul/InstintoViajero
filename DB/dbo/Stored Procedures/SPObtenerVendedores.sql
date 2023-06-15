CREATE PROCEDURE [dbo].[SPObtenerVendedores]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT	
					V.IdVendedor
					, V.CodVendedor
					, V.FechaContratacion
					, V.FechaCreacion
					, CASE WHEN V.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					, P.IdPersona
					, P.Identificacion
					, P.IdTipoIdentificacion
					, P.Nombre
     				, P.PrimerApellido
					, P.SegundoApellido
					, P.FechaNacimiento
					, S.IdSucursal
					, S.NombreSucursal
					FROM Vendedores V WITH (NOLOCK)
					INNER JOIN	 Personas P
						ON V.IdPersona = P.IdPersona
					INNER JOIN	 Sucursales S
						ON V.IdSucursal = S.IdSucursal
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END
