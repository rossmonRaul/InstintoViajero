CREATE TABLE [INSTINTO_VIAJERO].[TiposIdentificacion] (
    [IdTipoIdentificacion] INT           IDENTITY (1, 1) NOT NULL,
    [Descripcion]          NVARCHAR (50) NOT NULL,
    [Estado]               BIT           NOT NULL,
    CONSTRAINT [TiposIdentificacion_PK] PRIMARY KEY CLUSTERED ([IdTipoIdentificacion] ASC) WITH (DATA_COMPRESSION = PAGE)
);

