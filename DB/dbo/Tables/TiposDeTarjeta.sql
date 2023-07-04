CREATE TABLE [dbo].TiposDeTarjeta (
    [id] INT IDENTITY (1, 1) NOT NULL,
    DscTipoTarjeta VARCHAR(100) NOT NULL,  
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_TiposDeTarjeta] PRIMARY KEY ([id]),
);

