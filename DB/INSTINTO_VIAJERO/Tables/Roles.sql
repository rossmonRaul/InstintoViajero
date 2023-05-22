CREATE TABLE [INSTINTO_VIAJERO].[Roles] (
    [IdRol]               INT            IDENTITY (1, 1) NOT NULL,
    [Descripcion]         NVARCHAR (50)  NOT NULL,
    [Estado]              BIT            NOT NULL,
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    [Accion]              VARCHAR (1)    NULL,
    CONSTRAINT [Roles_PK] PRIMARY KEY CLUSTERED ([IdRol] ASC) WITH (DATA_COMPRESSION = PAGE)
);

