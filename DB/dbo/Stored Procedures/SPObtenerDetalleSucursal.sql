create   PROCEDURE [dbo].[SPObtenerDetalleSucursal]

( @IdSucursal INT )

AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		IdSucursal
							, NombreSucursal
							, CASE WHEN Estado = 1 THEN 'Activa' ELSE 'Inactiva' END AS Estado
							, Ubicacion
							, FechaCreacion
							, FechaModificacion
							, UsuarioCreacion
							, UsuarioModificacion
				FROM		Sucursales  WITH (NOLOCK) 
				WHERE		IdSucursal = @IdSucursal
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
