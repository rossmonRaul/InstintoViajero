CREATE TABLE [dbo].[Personas] (
    [IdPersona]            INT            IDENTITY (1, 1) NOT NULL,
    [Identificacion]       INT            NOT NULL,
    [IdTipoIdentificacion] INT            NOT NULL,
    [Nombre]               NVARCHAR (50)  NOT NULL,
    [PrimerApellido]       NVARCHAR (50)  NOT NULL,
    [SegundoApellido]      NVARCHAR (50)  NULL,
	--[Email]			       NVARCHAR (100) NOT NULL,
	[Profesion]			   NVARCHAR (100) NULL,
	[IdProvincia]		   INT			  NOT NULL,
	[IdCanton]			   INT			  NOT NULL,
	[IdDistrito]		   INT			  NOT NULL,
    [DireccionHabitacion]  NVARCHAR (200) NOT NULL,
	[FechaNacimiento]      DATE           NOT NULL,
    --[Telefono]             NVARCHAR (10)  NOT NULL,
    [Estado]               BIT            NULL,
    [FechaCreacion]        DATETIME       NULL,
    [FechaModificacion]    DATETIME       NULL,
    [UsuarioCreacion]      NVARCHAR (MAX) NULL,
    [UsuarioModificacion]  NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Personas] PRIMARY KEY ([IdPersona]),
    CONSTRAINT [FK_Personas_TiposIdentificacion] FOREIGN KEY ([IdTipoIdentificacion])
        REFERENCES [dbo].[TiposIdentificacion]([IdTipoIdentificacion]),
    CONSTRAINT [FK_Personas_Provincias] FOREIGN KEY ([IdProvincia])
        REFERENCES [dbo].[Provincias]([id_Provincia]),
	CONSTRAINT [FK_Personas_Cantones] FOREIGN KEY ([IdCanton])
			REFERENCES [dbo].[Cantones]([id_Canton]),
	CONSTRAINT [FK_Personas_Distritos] FOREIGN KEY ([IdDistrito])
			REFERENCES [dbo].[Distritos]([id_Distrito])
);

