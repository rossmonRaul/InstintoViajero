CREATE TABLE [dbo].[Paquetes]
(
	[IdPaquete]			  INT			  IDENTITY (1, 1) NOT NULL,
	--[Descripcion]	      VARCHAR(30)    NOT NULL,
	[Estado]              BIT             NOT NULL,
	[FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
	 CONSTRAINT [PK_Paquetes] PRIMARY KEY ([IdPaquete])
)
