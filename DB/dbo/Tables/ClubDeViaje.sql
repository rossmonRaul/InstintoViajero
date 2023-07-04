CREATE TABLE [dbo].ClubDeViaje (
    [id] INT IDENTITY (1, 1) NOT NULL,
    Descripcion VARCHAR(100) NOT NULL,
    NumCuenta VARCHAR(100) NOT NULL,
    FecVenceCuenta VARCHAR(100) NOT NULL,
    IdTipoCuenta INT NOT NULL,
    IdTipoTarjeta INT NOT NULL,
    IdFrecuenciaPago INT NOT NULL,
    IdCuota INT NOT NULL, --Listo
    IdPersona INT NOT NULL, --Listo
    IdVendedor INT NOT NULL,
    IdCordinador INT NOT NULL,
    IdSupervisor INT NOT NULL,
    IdPersonaBeneficiario INT NOT NULL,--Listo
    Estado bit,
    FecPrimerSorteo       DATETIME       NULL,
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_CLUB_DE_VIAJE] PRIMARY KEY ([id]),
    CONSTRAINT fk_persona_club FOREIGN KEY (IdPersona)        
        REFERENCES dbo.Personas (IdPersona),
    CONSTRAINT fk_persona_club_beneficiario FOREIGN KEY (IdPersonaBeneficiario)        
        REFERENCES dbo.Personas (IdPersona),
    CONSTRAINT fk_coutas_club FOREIGN KEY (IdCuota)        
        REFERENCES dbo.Cuotas (IdCuota),
);

