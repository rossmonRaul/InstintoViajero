--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Se lista Tipo de Identificacion
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerDetalleTipoIdentificacion]
( @IdTipoIdentificacion INT )

AS

	BEGIN
			BEGIN TRY
				BEGIN
					SELECT		IdTipoIdentificacion
								, Descripcion
								, Estado
					FROM		TiposIdentificacion WITH (NOLOCK)
					WHERE		IdTipoIdentificacion = @IdTipoIdentificacion
				END

			END TRY
			BEGIN CATCH
			SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
	END