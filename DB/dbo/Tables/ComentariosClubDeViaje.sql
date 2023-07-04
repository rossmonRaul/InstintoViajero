CREATE TABLE [dbo].[ComentariosClubDeViaje]
(
	[IdComentarioClubDeViaje] INT IDENTITY (1, 1) NOT NULL,
	[IdClubDeViaje]			  INT             NOT NULL,
	[Comentario]	      VARCHAR(MAX)    NOT NULL,
	[Estado]              BIT             NOT NULL,
	[FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
	 CONSTRAINT [PK_ComentariosClubDeViaje] PRIMARY KEY ([IdComentarioClubDeViaje]),
	 CONSTRAINT [FK_ComentariosClubDeViaje_ClubDeViaje] FOREIGN KEY ([IdClubDeViaje])
        REFERENCES [dbo].[ClubDeViaje]([id])
)
