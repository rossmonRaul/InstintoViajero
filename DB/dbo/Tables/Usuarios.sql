CREATE TABLE [dbo].[Usuarios] (
    [IdUsuario]           INT             IDENTITY (1, 1) NOT NULL,
    [IdPersona]           INT             NOT NULL,
    [IdRol]               INT             NOT NULL,
    [CoreoElectronico]    NVARCHAR (100)  NOT NULL,
    [ContrasenaTemporal]  VARBINARY (150) NULL,
    [Contrasena]          VARBINARY (150) NULL,
    [Estado]              BIT             NOT NULL,
    [IdSucursal]          INT             NOT NULL,
    [FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY ([IdUsuario]),
    CONSTRAINT [FK_Usuarios_Personas] FOREIGN KEY ([IdPersona])
        REFERENCES [dbo].[Personas]([IdPersona]),
    CONSTRAINT [FK_Usuarios_Roles] FOREIGN KEY ([IdRol])
        REFERENCES [dbo].[Roles]([IdRol]),
    CONSTRAINT [FK_Usuarios_Sucursales] FOREIGN KEY ([IdSucursal])
        REFERENCES [dbo].[Sucursales]([IdSucursal])
);

