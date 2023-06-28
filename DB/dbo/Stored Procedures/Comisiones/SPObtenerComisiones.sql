CREATE PROCEDURE [dbo].[SPObtenerComisiones]
AS
	BEGIN
		BEGIN TRY
			BEGIN
				SELECT	
					C.IdComision
					,C.IdRol
					,C.PorcentajeComision
					, C.Descripcion
					, CASE WHEN C.Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
					, R.Descripcion as DescripcionRol
					FROM Comisiones C WITH (NOLOCK)
					INNER JOIN	 Roles R
						ON C.IdRol = R.IdRol
			END
		END TRY
		BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
		END CATCH
	END

