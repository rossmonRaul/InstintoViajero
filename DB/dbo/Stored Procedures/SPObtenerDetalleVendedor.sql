CREATE PROCEDURE [dbo].[SPObtenerDetalleVendedor]
( @IdVendedor INT )
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		 
					V.IdVendedor
					, V.FechaContratacion
					, CASE WHEN V.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					, V.FechaCreacion
					, P.IdPersona
					, P.Identificacion
					, P.Nombre
     				, P.PrimerApellido
					, P.SegundoApellido
					, P.FechaNacimiento
					, P.Direccion
					, CASE WHEN P.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS EstadoPersona
					, S.IdSucursal
					, S.NombreSucursal
					, S.Ubicacion				
					, CASE WHEN S.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS EstadoSucursal
					, I.IdTipoIdentificacion
					, I.Descripcion
					FROM Vendedores V WITH (NOLOCK)
					INNER JOIN	 Personas P
						ON V.IdPersona = P.IdPersona
					INNER JOIN	 Sucursales S
						ON V.IdSucursal = S.IdSucursal
					INNER JOIN	 TiposIdentificacion I
						ON P.IdTipoIdentificacion = I.IdTipoIdentificacion

				WHERE V.IdVendedor = @IdVendedor
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END