﻿create   PROCEDURE [dbo].[SPInsertarSucursal]



( @NombreSucursal NVARCHAR (100)
, @Ubicacion VARCHAR (100),
@INDICADOR INT OUT,
@MENSAJE VARCHAR(50) OUT
)



AS
BEGIN
BEGIN TRY
BEGIN TRAN INSERTAR
BEGIN



INSERT INTO Sucursales (NombreSucursal, Estado,Ubicacion,FechaCreacion,UsuarioCreacion)
VALUES (@NombreSucursal,1,@Ubicacion,GETDATE(),'1');
END

COMMIT TRAN INSERTAR
SET @INDICADOR = 0
SET @MENSAJE = 'Sucursal registrada exitosamente'
--SELECT @INDICADOR, 'EXITO' AS MENSAJE
END TRY
BEGIN CATCH
SET @INDICADOR = 1
SET @MENSAJE = 'Error al registrar la sucursal.'
--SELECT @INDICADOR, ERROR_MESSAGE() AS MENSAJE;
ROLLBACK TRANSACTION INSERTAR
END CATCH
END
