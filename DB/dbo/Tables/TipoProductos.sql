CREATE TABLE dbo.TiposProductos (
  id INT PRIMARY KEY IDENTITY(1,1),
  CodTipoProducto VARCHAR(50),
  DesTipoProducto VARCHAR(100),
  [FechaCreacion]       DATETIME       NULL,
  [FechaModificacion]   DATETIME       NULL,
  [UsuarioCreacion]     NVARCHAR (MAX) NULL,
  [UsuarioModificacion] NVARCHAR (MAX) NULL,
);
