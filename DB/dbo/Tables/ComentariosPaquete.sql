CREATE TABLE [dbo].[ComentariosPaquete]
(
	[IdComentarioPaquete] INT IDENTITY (1, 1) NOT NULL,
	[IdPaquete]			  INT             NOT NULL,
	[Comentario]	      VARCHAR(MAX)    NOT NULL,
	[Estado]              BIT             NOT NULL,
	[FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
	 CONSTRAINT [PK_ComentariosPaquete] PRIMARY KEY ([IdComentarioPaquete]),
	 CONSTRAINT [FK_ComentariosPaquete_Paquetes] FOREIGN KEY ([IdPaquete])
        REFERENCES [dbo].[Paquetes]([IdPaquete])
)
