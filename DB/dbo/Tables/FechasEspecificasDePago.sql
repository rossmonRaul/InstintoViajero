CREATE TABLE [dbo].[FechasEspecificasDePago]
(
	[IdFechaEspecificaDePago] INT  IDENTITY (1, 1) NOT NULL,
	[IdClubDeViaje]				 INT				   NOT NULL,
	[FechaDePago]			 DATETIME			   NOT NULL,
    [Estado]				 BIT				   NOT NULL,
    [FechaCreacion]			 DATETIME			   NULL,  
    [FechaModificacion]		 DATETIME			   NULL, 
    [UsuarioCreacion]		 NVARCHAR (MAX)		   NULL,
    [UsuarioModificacion]	 NVARCHAR (MAX)		   NULL,
    CONSTRAINT [PK_FechasEspecificasDePago] PRIMARY KEY ([IdFechaEspecificaDePago]),
	CONSTRAINT [FK_FechasEspecificasDePago_ClubDeViaje] FOREIGN KEY ([IdClubDeViaje])
 REFERENCES [dbo].[ClubDeViaje]([id])
)