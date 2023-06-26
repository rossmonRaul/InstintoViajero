create   PROCEDURE [dbo].[SPActualizarSucursal]

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
					WHERE	IdSucursal = @IdSucursal
					END

				COMMIT TRAN ACTUALIZAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Sucursal actualizada exitosamente'
		END TRY
		BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error al actualizar sucursal.'-- + ERROR_MESSAGE()
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
	END
