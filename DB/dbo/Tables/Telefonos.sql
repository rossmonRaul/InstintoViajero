CREATE TABLE [dbo].[Telefonos]
(
	[IdTelefono]          INT  IDENTITY (1, 1) NOT NULL,
    [IdTipoDeTelefono]    INT				   NOT NULL,
	[IdPersona]			  INT				   NOT NULL,
	[Numero]              NVARCHAR(9)		   NOT NULL,
    [Estado]              BIT				   NOT NULL,
    [FechaCreacion]       DATETIME			   NULL,  
    [FechaModificacion]   DATETIME			   NULL, 
    [UsuarioCreacion]     NVARCHAR (MAX)	   NULL,
    [UsuarioModificacion] NVARCHAR (MAX)	   NULL,
    CONSTRAINT [PK_Telefonos] PRIMARY KEY ([IdTelefono]),
	CONSTRAINT [FK_Telefonos_Personas] FOREIGN KEY ([IdPersona])
        REFERENCES [dbo].[Personas]([IdPersona]),
	CONSTRAINT [FK_Telefonos_TiposDeTelefono] FOREIGN KEY ([IdTipoDeTelefono])
        REFERENCES [dbo].[TiposDeTelefono]([IdTipoDeTelefono]),
)

