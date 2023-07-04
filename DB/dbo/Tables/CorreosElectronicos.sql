CREATE TABLE [dbo].[CorreosElectronicos]
(
	[IdCorreoElectronico]          INT  IDENTITY (1, 1) NOT NULL,
	[IdPersona]			  INT				   NOT NULL,
	[CorreoElectronico]              NVARCHAR(100)		   NOT NULL,
    [Principal]           BIT                  NOT NULL,
    [Estado]              BIT				   NOT NULL,
    [FechaCreacion]       DATETIME			   NULL,  
    [FechaModificacion]   DATETIME			   NULL, 
    [UsuarioCreacion]     NVARCHAR (MAX)	   NULL,
    [UsuarioModificacion] NVARCHAR (MAX)	   NULL,
    CONSTRAINT [PK_CorreosElectronicos] PRIMARY KEY ([IdCorreoElectronico]),
	CONSTRAINT [FK_CorreosElectronicos_Personas] FOREIGN KEY ([IdPersona])
        REFERENCES [dbo].[Personas]([IdPersona])
)
