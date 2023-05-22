CREATE TABLE [INSTINTO_VIAJERO].[Usuarios] (
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
    [Accion]              VARCHAR (1)     NULL,
    CONSTRAINT [Usuarios_PK] PRIMARY KEY CLUSTERED ([IdUsuario] ASC) WITH (DATA_COMPRESSION = PAGE),
    CONSTRAINT [Personas_FK_01] FOREIGN KEY ([IdPersona]) REFERENCES [INSTINTO_VIAJERO].[Personas] ([IdPersona]),
    CONSTRAINT [Roles_FK_01] FOREIGN KEY ([IdRol]) REFERENCES [INSTINTO_VIAJERO].[Roles] ([IdRol]),
    CONSTRAINT [Sucursales_FK_01] FOREIGN KEY ([IdSucursal]) REFERENCES [INSTINTO_VIAJERO].[Sucursales] ([IdSucursal])
);

