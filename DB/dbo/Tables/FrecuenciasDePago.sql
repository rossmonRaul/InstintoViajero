CREATE TABLE [dbo].FrecuenciasDePago (
    [id] INT IDENTITY (1, 1) NOT NULL,
    CodFrecuenciasDePago CHAR(2) NOT NULL,
    DscFrecuenciasDePago VARCHAR(100) NOT NULL,
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_FrecuenciasDePagoE] PRIMARY KEY ([id]),
);

