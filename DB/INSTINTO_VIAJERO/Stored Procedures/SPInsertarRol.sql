--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Insertar Rol
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPInsertarRol]
( @Descripcion VARCHAR (50)
, @Estado BIT
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)
AS
		BEGIN
			BEGIN TRY
				BEGIN TRAN INSERTAR
					BEGIN
						INSERT INTO Roles
						(Descripcion, Estado,FechaCreacion, UsuarioCreacion, Accion) VALUES 
						(@Descripcion, @Estado, GETDATE(),'1','I')
					END
			COMMIT TRAN INSERTAR
					SET @INDICADOR = 0
				SET @MENSAJE = 'Exito: Rol registrado exiosamente'
			END TRY
			BEGIN CATCH
				SET @INDICADOR = 1
				SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
				ROLLBACK TRANSACTION INSERTAR
			END CATCH
	END