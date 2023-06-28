CREATE TABLE [dbo].[Comisiones]
(
	[IdComision]		  INT			  IDENTITY (1, 1) NOT NULL,
	[IdRol]               INT             NOT NULL,
	[PorcentajeComision]  DECIMAL(4,2)    NOT NULL,
	[Descripcion]	      VARCHAR(100)    NOT NULL,
	[Estado]              BIT             NOT NULL,
	[FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
	 CONSTRAINT [PK_Comisiones] PRIMARY KEY ([IdComision]),
	 CONSTRAINT [FK_Comisiones_Roles] FOREIGN KEY ([IdRol])
        REFERENCES [dbo].[Roles]([IdRol])
)
