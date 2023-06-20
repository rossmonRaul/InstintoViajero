create   PROCEDURE [dbo].SPActualizarFormasDePago

( 
		@id INT
		,@CodFormaDePago NVARCHAR (50)
		,@Descripcion VARCHAR (100)
		,@INDICADOR INT OUT
		,@MENSAJE VARCHAR(50) OUT
	)

AS
	BEGIN
		BEGIN TRY
			BEGIN TRAN ACTUALIZAR
			
					BEGIN
					UPDATE FormasDePago SET
					CodFormaDePago = @CodFormaDePago
					, Descripcion = @Descripcion					
					, FechaModificacion = GETDATE()
					, UsuarioModificacion = '1'
					WHERE	id = @id

					INSERT INTO Bitacora(
						Tabla, 
						Accion, 
						Detalle, 
						Fecha,
						Usuario
						)
					VALUES (
						'FormasDePago',
						'ACTUALIZAR', 
						'SE ACTUALIZA UNA FORMA DE PAGO', 
						GETDATE(), 
						'1'
					);

					END

				COMMIT TRAN ACTUALIZAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Forma de Pago actualizada exitosamente'
		END TRY
		BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error al actualizar la forma de pago.'
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
	END
