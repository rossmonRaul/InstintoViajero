CREATE TABLE [dbo].[CuentasBancariasClubDeViaje]
(
	[IdCuentaBancariaClubDeViaje] INT IDENTITY (1, 1) NOT NULL,
	[IdClubDeViaje]		  INT             NOT NULL,
	[Banco]				  NVARCHAR(30)     NOT NULL,
	[Numero]	          NUMERIC(16,0)     NOT NULL,
	[FechaVencimiento]	  NVARCHAR(5)      NOT NULL,
    [IndTipoCuenta]	      VARCHAR(1)	  NOT NULL,--D Debito , C credito
    [TipoTarjeta]	      NVARCHAR(50)	  NOT NULL,
	[Estado]              BIT             NOT NULL,
	[FechaCreacion]       DATETIME        NULL,
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
	 CONSTRAINT [PK_CuentasBancariasClubDeViaje] PRIMARY KEY ([IdCuentaBancariaClubDeViaje]),
	 CONSTRAINT [FK_CuentasBancariasClubDeViaje_ClubDeViaje] FOREIGN KEY (IdClubDeViaje)
        REFERENCES [dbo].[ClubDeViaje]([id])
)