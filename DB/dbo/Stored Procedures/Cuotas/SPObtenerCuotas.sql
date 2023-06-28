CREATE PROCEDURE [dbo].[SPObtenerCuotas]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT	
					C.IdCuota
					, C.Codigo
					, C.CuotaSemanal
					, C.Monto
					, C.FechaCreacion

					, CASE WHEN C.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					FROM Cuotas C WITH (NOLOCK)
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

