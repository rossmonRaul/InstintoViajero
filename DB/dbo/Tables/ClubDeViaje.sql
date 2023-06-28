CREATE TABLE [dbo].ClubDeViaje (
    [id] INT IDENTITY (1, 1) NOT NULL,
    Descripcion VARCHAR(100) NOT NULL,
    IdPersona INT NOT NULL,
    IdPersonaBeneficiario INT NOT NULL,
    Estado bit,
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_CLUB_DE_VIAJE] PRIMARY KEY ([id]),
    CONSTRAINT fk_persona_club FOREIGN KEY (IdPersona)        
        REFERENCES dbo.Personas (IdPersona),
    CONSTRAINT fk_persona_club_beneficiario FOREIGN KEY (IdPersonaBeneficiario)        
        REFERENCES dbo.Personas (IdPersona)
);

