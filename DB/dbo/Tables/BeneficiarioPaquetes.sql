CREATE TABLE [dbo].[BeneficiarioPaquetes]
(
	[IdBeneficiarioPaquete] INT IDENTITY (1, 1) NOT NULL,
	[IdPaquete]			  INT              NOT NULL,
	[IdPersona]			  INT              NOT NULL,
	[Estado]              BIT              NOT NULL,
	[FechaCreacion]       DATETIME         NULL,
    [FechaModificacion]   DATETIME         NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)   NULL,
    [UsuarioModificacion] NVARCHAR (MAX)   NULL,
	 CONSTRAINT [PK_BeneficiarioPaquetes] PRIMARY KEY ([IdBeneficiarioPaquete]),
	 CONSTRAINT [FK_BeneficiarioPaquetes_Paquetes] FOREIGN KEY ([IdPaquete])
        REFERENCES [dbo].[Paquetes]([idPaquete]),
	 CONSTRAINT [FK_BeneficiarioPaquetes_Personas] FOREIGN KEY ([IdPersona])
        REFERENCES [dbo].[Personas]([IdPersona])
)