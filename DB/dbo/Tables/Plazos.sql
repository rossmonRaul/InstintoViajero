CREATE TABLE [dbo].[Plazos]
(
	[IdPlazo]			  INT			  IDENTITY (1, 1) NOT NULL,
	[Descripcion]	      VARCHAR(30)    NOT NULL,
	[Estado]              BIT             NOT NULL,
	[FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
	 CONSTRAINT [PK_Plazos] PRIMARY KEY ([IdPlazo])
)
