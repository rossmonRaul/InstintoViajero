CREATE PROCEDURE [dbo].[SPObtenerClientes]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT	
					C.IdCliente
					, C.FechaCreacion
					, CASE WHEN C.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					, P.IdPersona
					, P.Identificacion
					, P.IdTipoIdentificacion
					, P.Nombre
     				, P.PrimerApellido
					, P.SegundoApellido
					, P.FechaNacimiento
					FROM Clientes C WITH (NOLOCK)
					INNER JOIN	 Personas P
						ON C.IdPersona = P.IdPersona

			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

