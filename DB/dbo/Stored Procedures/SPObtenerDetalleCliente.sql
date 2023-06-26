CREATE PROCEDURE [dbo].[SPObtenerDetalleCliente]
( @IdCliente INT )
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		 
					C.IdCliente
					, CASE WHEN C.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					, C.FechaCreacion
					, P.IdPersona
					, P.Identificacion
					, P.Nombre
     				, P.PrimerApellido
					, P.SegundoApellido
					, P.FechaNacimiento
					, P.Direccion
					, I.IdTipoIdentificacion
					, I.Descripcion
					FROM Clientes C WITH (NOLOCK)
					INNER JOIN	 Personas P
						ON C.IdPersona = P.IdPersona
					INNER JOIN	 TiposIdentificacion I
						ON P.IdTipoIdentificacion = I.IdTipoIdentificacion

				WHERE C.IdCliente = @IdCliente
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END