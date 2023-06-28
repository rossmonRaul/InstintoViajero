CREATE TABLE [dbo].[Regalias]
(
	[IdRegalia]			  INT			  IDENTITY (1, 1) NOT NULL,
	[Descripcion]	      VARCHAR(30)    NOT NULL,
	[Estado]              BIT             NOT NULL,
	[FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
	 CONSTRAINT [PK_Regalias] PRIMARY KEY ([IdRegalia])
)