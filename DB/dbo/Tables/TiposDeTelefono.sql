CREATE TABLE [dbo].[TiposDeTelefono]
(
	[IdTipoDeTelefono]    INT            IDENTITY (1, 1) NOT NULL,
	[Descripcion]         NVARCHAR(30)    NOT NULL,
    [Estado]              BIT             NOT NULL,
    [FechaCreacion]       DATETIME        NULL,  
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
    CONSTRAINT [PK_TiposDeTelefono] PRIMARY KEY ([IdTipoDeTelefono]),
)
