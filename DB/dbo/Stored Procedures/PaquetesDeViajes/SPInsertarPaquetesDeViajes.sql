CREATE  PROCEDURE [dbo].SPInsertarPaqueteDeViaje
	( 
		
		@Descripcion NVARCHAR (100)
		,@ObservacionesGenerales VARCHAR (1000)
		,@PrecioTotal FLOAT
		,@CantidadCampos INT
		--,@IdGrupo INT
		--,@CantidadCuotas INT
		,@TieneRegalias BIT
		,@TieneDescuentos BIT
		,@FechaSalida DATETIME
		,@FechaLLegada DATETIME		
		,@UsuarioCreacion NVARCHAR(15)		
		,@INDICADOR INT OUT
		,@MENSAJE VARCHAR(50) OUT
	)

AS
BEGIN
BEGIN TRY
BEGIN TRAN INSERTAR
BEGIN

			INSERT INTO PaquetesDeViajes
			(				
				Descripcion,
				ObservacionesGenerales,
				PrecioTotal,
				CantidadCampos,
				--IdGrupo,
				--CantidadCuotas,
				TieneRegalias,
				TieneDescuentos,
				FechaSalida,
				FechaLLegada,				
				Estado, 
				FechaCreacion, 
				UsuarioCreacion
			)
			VALUES 
			(				
				@Descripcion,
				@ObservacionesGenerales,
				@PrecioTotal,
				@CantidadCampos,
				--@IdGrupo,
				--@CantidadCuotas,
				@TieneRegalias,
				@TieneDescuentos,
				@FechaSalida,
				@FechaLLegada,
				1, 
				GETDATE(), 
				@UsuarioCreacion
			);

			INSERT INTO Bitacora(
				Tabla, 
				Accion, 
				Detalle, 
				Fecha,
				Usuario
				)
			VALUES (
				'PaquetesDeViajes',
				'INSERTAR', 
				'SE INSERTA UNA NUEVO PAQUETE DE VIAJE', 
				GETDATE(), 
				@UsuarioCreacion
			);
END

			COMMIT TRAN INSERTAR
			SET @INDICADOR = 0
			SET @MENSAJE = 'Exito: Paquete de viaje registrado exiosamente'
			--SELECT @INDICADOR, 'EXITO' AS MENSAJE
		END TRY
		BEGIN CATCH
			SET @INDICADOR = 1
			SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
			--SELECT @INDICADOR, ERROR_MESSAGE() AS MENSAJE;
			ROLLBACK TRANSACTION INSERTAR
		END CATCH
END
