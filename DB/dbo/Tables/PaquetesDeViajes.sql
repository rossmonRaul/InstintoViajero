CREATE TABLE dbo.PaquetesDeViajes (
  id INT PRIMARY KEY IDENTITY(1,1),
  Descripcion VARCHAR(100) NOT NULL,
  ObservacionesGenerales VARCHAR(1000) NULL,
  PrecioTotal FLOAT NOT NULL,
  CantidadCampos INT NOT NULL,
  --IdGrupo INT NOT NULL,
  --CantidadCuotas INT NOT NULL,
  TieneRegalias BIT DEFAULT 0,
  TieneDescuentos BIT DEFAULT 0,
  Estado BIT DEFAULT 1,
  [FechaSalida]       DATETIME       NOT NULL,
  [FechaLLegada]      DATETIME       NOT NULL,
  [FechaCreacion]       DATETIME       NULL,
  [FechaModificacion]   DATETIME       NULL,
  [UsuarioCreacion]     NVARCHAR (MAX) NULL,
  [UsuarioModificacion] NVARCHAR (MAX) NULL,
  --FOREIGN KEY (IdGrupo) REFERENCES GruposDeViajes(id)
);