--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Eliminar Persona
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPEliminarPersona]
( @Identificacion INT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT)

AS
	BEGIN
		DECLARE @ESTADO_ACTUAL BIT;
			BEGIN TRY
				BEGIN TRAN DESACTIVAR
				SET @ESTADO_ACTUAL = (SELECT TOP 1 Estado FROM Personas WHERE Identificacion = @Identificacion)
					BEGIN
						UPDATE Personas SET
						Estado = CASE WHEN @ESTADO_ACTUAL = 1 THEN 0 ELSE 1 END
					  , FechaModificacion = GETDATE()
					  , UsuarioModificacion = '1'
					  , Accion = CASE WHEN @ESTADO_ACTUAL = 1 THEN 'E' ELSE 'A' END
					  WHERE Identificacion = @Identificacion
					END
					COMMIT TRAN DESACTIVAR
					SET @INDICADOR = 0
					SET @MENSAJE =(
									CASE WHEN @ESTADO_ACTUAL = 1 THEN 'La persona fue eliminada exitosamente.'
										 ELSE 'La persona fue reactivada exitosamente.'
									END
									)
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION DESACTIVAR
			END CATCH
	END