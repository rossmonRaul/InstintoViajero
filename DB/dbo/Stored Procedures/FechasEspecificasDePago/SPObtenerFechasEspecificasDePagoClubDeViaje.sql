CREATE PROCEDURE [dbo].[SPObtenerFechasEspecificasDePagoClubDeViaje]
( @IdClubDeViaje INT )
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT		 
					F.IdFechaEspecificaDePago
					, F.IdClubDeViaje
					, F.FechaDePago
					, F.FechaCreacion
					, CASE WHEN F.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				FROM FechasEspecificasDePago F WITH (NOLOCK)
				INNER JOIN ClubDeViaje C
					ON C.id = F.IdClubDeViaje 
				WHERE C.id = @IdClubDeViaje
				
			END
			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END