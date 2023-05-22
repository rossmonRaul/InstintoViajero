CREATE TABLE [dbo].[TiposIdentificacion] (
    [IdTipoIdentificacion] INT           IDENTITY (1, 1) NOT NULL,
    [Descripcion]          NVARCHAR (50) NOT NULL,
    [Estado]               BIT           NOT NULL
);

