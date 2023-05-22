CREATE TABLE [dbo].[Personas] (
    [IdPersona]            INT            IDENTITY (1, 1) NOT NULL,
    [Identificacion]       INT            NOT NULL,
    [IdTipoIdentificacion] INT            NOT NULL,
    [Nombre]               NVARCHAR (50)  NOT NULL,
    [PrimerApellido]       NVARCHAR (50)  NOT NULL,
    [SegundoApellido]      NVARCHAR (50)  NULL,
    [FechaNacimiento]      DATE           NOT NULL,
    [Direccion]            NVARCHAR (100) NOT NULL,
    [Telefono]             NVARCHAR (10)  NOT NULL,
    [Estado]               BIT            NULL,
    [FechaCreacion]        DATETIME       NULL,
    [FechaModificacion]    DATETIME       NULL,
    [UsuarioCreacion]      NVARCHAR (MAX) NULL,
    [UsuarioModificacion]  NVARCHAR (MAX) NULL,
    [Accion]               VARCHAR (1)    NULL
);

