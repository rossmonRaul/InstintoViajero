CREATE PROCEDURE [dbo].[SPObtenerDetalleTelefonoID]
( @IdTelefono INT )
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		 
					T.IdTelefono
					, T.IdPersona
					, T.IdTipoDeTelefono
					, T.Numero
					, T.FechaCreacion
					, TT.Descripcion
					, CASE WHEN T.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM Telefonos T WITH (NOLOCK)
				INNER JOIN TiposDeTelefono TT
					ON TT.IdTipoDeTelefono =T.IdTipoDeTelefono
				WHERE T.IdPersona = @IdTelefono
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END