CREATE TABLE [dbo].TiposDeCuenta (
    [id] INT IDENTITY (1, 1) NOT NULL,
    CodTipoCuenta VARCHAR(2) NOT NULL,  
    DscTipoCuenta VARCHAR(100) NOT NULL,  
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_TiposDeCuenta] PRIMARY KEY ([id]),

);

