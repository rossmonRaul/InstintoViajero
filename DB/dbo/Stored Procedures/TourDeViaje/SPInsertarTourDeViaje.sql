CREATE  PROCEDURE [dbo].SPInsertarTourDeViaje
	( 
		
		@Descripcion NVARCHAR (100)		
		,@Precio FLOAT		
		,@Observaciones NVARCHAR (1000)		
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

			INSERT INTO TourDeViaje
			(				
				Descripcion,
				Precio,
				Observaciones,
				FechaSalida,
				FechaLLegada,				
				Estado, 
				FechaCreacion, 
				UsuarioCreacion
			)
			VALUES 
			(				
				@Descripcion,				
				@Precio,	
				@Observaciones,
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
				'TourDeViaje',
				'INSERTAR', 
				'SE INSERTA UNA NUEVO TOUR DE VIAJE', 
				GETDATE(), 
				@UsuarioCreacion
			);
END

			COMMIT TRAN INSERTAR
			SET @INDICADOR = 0
			SET @MENSAJE = 'Exito: Tour de viaje registrado exiosamente'
			--SELECT @INDICADOR, 'EXITO' AS MENSAJE
		END TRY
		BEGIN CATCH
			SET @INDICADOR = 1
			SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
			--SELECT @INDICADOR, ERROR_MESSAGE() AS MENSAJE;
			ROLLBACK TRANSACTION INSERTAR
		END CATCH
END
