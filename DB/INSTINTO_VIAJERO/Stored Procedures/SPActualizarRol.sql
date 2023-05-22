--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Actualizar Rol
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPActualizarRol]
( @IdRol INT
, @Descripcion NVARCHAR(50)
, @Estado BIT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)
AS
	BEGIN
			BEGIN TRY
		BEGIN TRAN ACTUALIZAR
				BEGIN
						UPDATE		
						Roles SET
						Descripcion = @Descripcion
					  , Estado = @Estado
					  , FechaModificacion = GETDATE()
					  , UsuarioModificacion = '1'
					  , Accion = 'A'
					  WHERE	IdRol = @IdRol	  
				END

				COMMIT TRAN ACTUALIZAR
				SET @INDICADOR = 0
				SET @MENSAJE = 'Exito: Rol actualizado exiosamente'
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
	END