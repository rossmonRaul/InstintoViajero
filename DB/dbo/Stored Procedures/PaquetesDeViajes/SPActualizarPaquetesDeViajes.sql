create   PROCEDURE [dbo].SPActualizarPaqueteDeViaje

( 
		@id INT
		,@Descripcion NVARCHAR (100)
		,@ObservacionesGenerales VARCHAR (1000)
		,@PrecioTotal FLOAT
		,@CantidadCampos INT
		--,@IdGrupo INT
		--,@CantidadCuotas INT
		,@TieneRegalias BIT
		,@TieneDescuentos BIT
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
					UPDATE PaquetesDeViajes SET
					Descripcion = @Descripcion
					, ObservacionesGenerales = @ObservacionesGenerales
					, PrecioTotal = @PrecioTotal
					, CantidadCampos = @CantidadCampos
					--, IdGrupo = @IdGrupo
					--, CantidadCuotas = @CantidadCuotas
					, TieneRegalias = @TieneRegalias
					, TieneDescuentos = @TieneDescuentos
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
						'PaquetesDeViajes',
						'ACTUALIZAR', 
						'SE ACTUALIZA UNA PAQUETE DE VIAJE', 
						GETDATE(), 
						@UsuarioModificacion
					);

					END

				COMMIT TRAN ACTUALIZAR
					SET @INDICADOR = 0
					SET @MENSAJE = 'Exito: Paquete de Viaje se actualizada exitosamente'
		END TRY
		BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION ACTUALIZAR
			END CATCH
	END
