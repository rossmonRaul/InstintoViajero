create PROCEDURE [dbo].[SPObtenerDetalleSucursalNombre]

( @Nombre VARCHAR(50) )

AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		IdSucursal
							, NombreSucursal
							, Estado
							, Ubicacion
							, FechaCreacion
							, FechaModificacion
							, UsuarioCreacion
							, UsuarioModificacion
							, Accion
				FROM		Sucursales  WITH (NOLOCK) 
				WHERE		NombreSucursal = @Nombre
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END
