CREATE PROCEDURE [dbo].[SPObtenerBeneficiarioPaquete]
@IdPaquete INT
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT	
					BP.IdBeneficiarioPaquete
					, BP.FechaCreacion
					, CASE WHEN BP.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					, P.IdPersona
					, P.Identificacion
					, P.IdTipoIdentificacion
					, P.Nombre
     				, P.PrimerApellido
					, P.SegundoApellido
					, P.FechaNacimiento
					FROM BeneficiarioPaquetes BP WITH (NOLOCK)
					INNER JOIN Paquetes PQ
						ON PQ.IdPaquete = BP.IdPaquete
					INNER JOIN	 Personas P
						ON BP.IdPersona = P.IdPersona
					WHERE BP.IdPaquete = @IdPaquete

			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

