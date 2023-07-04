CREATE TABLE [dbo].[CuentasBancariasPaquete]
(
	[IdCuentaBancariaPaquete] INT IDENTITY (1, 1) NOT NULL,
	[IdPaquete]			  INT              NOT NULL,
	[Banco]				  NVARCHAR(30)     NOT NULL,
	[Numero]	          NUMERIC(16,0)    NOT NULL,
	[FechaVencimiento]	  NVARCHAR(5)      NOT NULL,
    [IndTipoCuenta]	      VARCHAR(1)	   NOT NULL,--D Debito , C credito
    [TipoTarjeta]	      NVARCHAR(50)	   NOT NULL,
	[Estado]              BIT              NOT NULL,
	[FechaCreacion]       DATETIME         NULL,
    [FechaModificacion]   DATETIME         NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)   NULL,
    [UsuarioModificacion] NVARCHAR (MAX)   NULL,
	 CONSTRAINT [PK_CuentasBancariasPaquete] PRIMARY KEY ([IdCuentaBancariaPaquete]),
	 CONSTRAINT [FK_CuentasBancariasPaquete_Paquetes] FOREIGN KEY ([IdPaquete])
        REFERENCES [dbo].[Paquetes]([idPaquete])
)