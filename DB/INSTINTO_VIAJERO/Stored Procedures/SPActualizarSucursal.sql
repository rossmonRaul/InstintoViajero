--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Actualizar Sucursal
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPActualizarSucursal]
( @IdSucursal INT 
, @NombreSucursal NVARCHAR (100)
, @Estado BIT
, @Ubicacion VARCHAR (100) 
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)

AS
	BEGIN
		BEGIN TRY
			BEGIN TRAN ACTUALIZAR
			
					BEGIN
					UPDATE Sucursales SET
					NombreSucursal = @NombreSucursal
					, Estado = @Estado
					, Ubicacion = @Ubicacion
					, FechaModificacion = GETDATE()
					, UsuarioModificacion = '1'
					, Accion = 'A'
					WHERE	IdSucursal = @IdSucursal
					END

				COMMIT TRAN ACTUALIZAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Exito: Sucursal actualizada exitosamente'
		END TRY
		BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
	END