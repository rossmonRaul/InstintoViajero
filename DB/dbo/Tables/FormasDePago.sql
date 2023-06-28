CREATE TABLE dbo.FormasDePago (
  id INT PRIMARY KEY IDENTITY(1,1),
  CodFormaDePago VARCHAR(50),
  Descripcion VARCHAR(100),  
  Estado bit,
  [FechaCreacion]       DATETIME       NULL,
  [FechaModificacion]   DATETIME       NULL,
  [UsuarioCreacion]     NVARCHAR (MAX) NULL,
  [UsuarioModificacion] NVARCHAR (MAX) NULL,  
);