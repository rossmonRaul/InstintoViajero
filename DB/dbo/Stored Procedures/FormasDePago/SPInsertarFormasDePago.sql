CREATE  PROCEDURE [dbo].SPInsertarFormasDePago
	( 
		@CodFormaDePago NVARCHAR (50)
		,@Descripcion VARCHAR (100)
		,@INDICADOR INT OUT
		,@MENSAJE VARCHAR(50) OUT
	)



AS
BEGIN
BEGIN TRY
BEGIN TRAN INSERTAR
BEGIN

			INSERT INTO FormasDePago(CodFormaDePago, Descripcion, Estado, FechaCreacion,UsuarioCreacion)
			VALUES (@CodFormaDePago,@Descripcion, 1, GETDATE(), '1');

			INSERT INTO Bitacora(
				Tabla, 
				Accion, 
				Detalle, 
				Fecha,
				Usuario
				)
			VALUES (
				'FormasDePago',
				'INSERTAR', 
				'SE INSERTA UNA NUEVA FORMA DE PAGO', 
				GETDATE(), 
				'1'
			);
END

			COMMIT TRAN INSERTAR
			SET @INDICADOR = 0
			SET @MENSAJE = 'Exito: Forma de Pago registrada exiosamente'
			--SELECT @INDICADOR, 'EXITO' AS MENSAJE
		END TRY
		BEGIN CATCH
			SET @INDICADOR = 1
			SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
			--SELECT @INDICADOR, ERROR_MESSAGE() AS MENSAJE;
			ROLLBACK TRANSACTION INSERTAR
		END CATCH
END
