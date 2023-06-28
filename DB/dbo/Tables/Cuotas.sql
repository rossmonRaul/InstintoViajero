CREATE TABLE [dbo].[Cuotas]
(
	[IdCuota]			  INT			  IDENTITY (1, 1) NOT NULL,
	[Codigo]	          NVARCHAR(1)     NOT NULL,
	[CuotaSemanal]	      NUMERIC(10,2)   NOT NULL,
	[Monto]			      NUMERIC(10,2)   NOT NULL,
	[Estado]              BIT             NOT NULL,
	[FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
	 CONSTRAINT [PK_Cuotas] PRIMARY KEY ([IdCuota])
)