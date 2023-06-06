CREATE PROCEDURE [dbo].[SPInsertarBitacora]
(
    @Tabla NVARCHAR(50),
    @Accion NVARCHAR(50),
    @Detalle NVARCHAR(600),
    @Fecha DATETIME,
    @Usuario NVARCHAR(50)
)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO [dbo].[Bitacora] (Tabla, Accion, Detalle, Fecha, Usuario)
    VALUES (@Tabla, @Accion, @Detalle, @Fecha, @Usuario);
END