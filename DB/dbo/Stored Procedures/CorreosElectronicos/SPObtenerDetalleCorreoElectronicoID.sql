CREATE PROCEDURE [dbo].[SPObtenerDetalleCorreoElectronicoID]
( @IdCorreoElectronico INT )
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		 
					C.IdCorreoElectronico
					, C.IdPersona
					, C.CorreoElectronico
					, C.Principal
					, C.FechaCreacion
					, CASE WHEN C.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM CorreosElectronicos C WITH (NOLOCK)
				WHERE C.IdCorreoElectronico = @IdCorreoElectronico
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END