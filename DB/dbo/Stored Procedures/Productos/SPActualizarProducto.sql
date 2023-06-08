create   PROCEDURE [dbo].[SPActualizarProducto]

(
  @id int
, @Nombre NVARCHAR (100)
, @CodProducto VARCHAR (100)
, @IdTipo int
, @INDICADOR INT OUT
, @MENSAJE VARCHAR(50) OUT
)

AS
	BEGIN
		BEGIN TRY
			BEGIN TRAN ACTUALIZAR
			
					BEGIN
					UPDATE Productos SET
					Nombre = @Nombre					
					, CodProducto = @CodProducto
					, IdTipo = @IdTipo
					, FechaModificacion = GETDATE()
					, UsuarioModificacion = '1'
					WHERE	id = @id
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
