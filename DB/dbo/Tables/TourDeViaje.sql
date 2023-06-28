CREATE TABLE dbo.TourDeViaje (
  id INT PRIMARY KEY IDENTITY(1,1),
  Descripcion VARCHAR(100) NOT NULL,
  Observaciones VARCHAR(1000) NULL,
  Precio FLOAT NOT NULL, 
  [FechaSalida]       DATETIME       NOT NULL,
  [FechaLLegada]      DATETIME       NOT NULL,
  Estado BIT DEFAULT 1,  
  [FechaCreacion]       DATETIME       NULL,
  [FechaModificacion]   DATETIME       NULL,
  [UsuarioCreacion]     NVARCHAR (MAX) NULL,
  [UsuarioModificacion] NVARCHAR (MAX) NULL,  
);