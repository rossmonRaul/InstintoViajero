create   PROCEDURE [dbo].SPActualizarTourDeViaje
( 
		@id INT
		,@Descripcion NVARCHAR (100)		
		,@Precio FLOAT
		,@Observaciones NVARCHAR (1000)
		,@FechaSalida DATETIME
		,@FechaLLegada DATETIME		
		,@UsuarioModificacion VARCHAR (100)		
		,@INDICADOR INT OUT
		,@MENSAJE VARCHAR(50) OUT
	)

AS
	BEGIN
		BEGIN TRY
			BEGIN TRAN ACTUALIZAR
			
					BEGIN
					UPDATE TourDeViaje SET
					Descripcion = @Descripcion	
					, Observaciones = @Observaciones
					, Precio = @Precio					
					, FechaSalida = @FechaSalida
					, FechaLLegada = @FechaLLegada					
					, FechaModificacion = GETDATE()
					, UsuarioModificacion = @UsuarioModificacion
					WHERE	id = @id

					INSERT INTO Bitacora(
						Tabla, 
						Accion, 
						Detalle, 
						Fecha,
						Usuario
						)
					VALUES (
						'TourDeViaje',
						'ACTUALIZAR', 
						'SE ACTUALIZA UNA TOUR DE VIAJE', 
						GETDATE(), 
						@UsuarioModificacion
					);

					END

				COMMIT TRAN ACTUALIZAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Exito: Tour de Viaje se actualizada exitosamente'
		END TRY
		BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
	END
