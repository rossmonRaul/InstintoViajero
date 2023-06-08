CREATE TABLE dbo.Productos (
  id INT PRIMARY KEY IDENTITY(1,1),
  CodProducto VARCHAR(50),
  Nombre VARCHAR(100),
  IdTipo INT,
  Estado bit,
  [FechaCreacion]       DATETIME       NULL,
  [FechaModificacion]   DATETIME       NULL,
  [UsuarioCreacion]     NVARCHAR (MAX) NULL,
  [UsuarioModificacion] NVARCHAR (MAX) NULL,
  FOREIGN KEY (IdTipo) REFERENCES TiposProductos(id)
);