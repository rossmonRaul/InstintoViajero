--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Insertar Sucursal
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPInsertarSucursal]
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



INSERT INTO Sucursales (NombreSucursal, Estado,Ubicacion,FechaCreacion,UsuarioCreacion,Accion)
VALUES (@NombreSucursal,1,@Ubicacion,GETDATE(),'1','I');
END

COMMIT TRAN INSERTAR
SET @INDICADOR = 0
SET @MENSAJE = 'Exito: Sucursal registrada exiosamente'
--SELECT @INDICADOR, 'EXITO' AS MENSAJE
END TRY
BEGIN CATCH
SET @INDICADOR = 1
SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
--SELECT @INDICADOR, ERROR_MESSAGE() AS MENSAJE;
ROLLBACK TRANSACTION INSERTAR
END CATCH
END