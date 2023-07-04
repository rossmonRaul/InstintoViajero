CREATE TABLE [dbo].BitacoraComentarioClubDeViaje (
    [id] INT IDENTITY (1, 1) NOT NULL,
    DscComentario VARCHAR(1000) NOT NULL,       
    IdClubDeViaje INT NOT NULL,    
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Bitacora_CLUB_DE_VIAJE] PRIMARY KEY ([id]),
    CONSTRAINT fk_club_viaje_bitacora FOREIGN KEY (IdClubDeViaje)        
        REFERENCES dbo.ClubDeViaje (Id),
);

