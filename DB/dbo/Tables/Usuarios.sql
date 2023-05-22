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
    [Accion]              VARCHAR (1)     NULL
);

