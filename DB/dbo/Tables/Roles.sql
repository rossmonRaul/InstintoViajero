CREATE TABLE [dbo].[Roles] (
    [IdRol]               INT            IDENTITY (1, 1) NOT NULL,
    [Descripcion]         NVARCHAR (50)  NOT NULL,
    [Estado]              BIT            NOT NULL,
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Roles] PRIMARY KEY ([IdRol])
);

