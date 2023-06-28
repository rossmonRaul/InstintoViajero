CREATE TABLE [dbo].[Bitacora] (
    [IdBitacora]        INT             IDENTITY (1, 1) NOT NULL,
    [Tabla]             NVARCHAR (50)   NOT NULL,
    [Accion]            NVARCHAR (50)   NOT NULL,
	[Detalle]			NVARCHAR (max)  NULL,
    [Fecha]             DATETIME        NOT NULL,
    [Usuario]           NVARCHAR (50)   NOT NULL, 
    CONSTRAINT [PK_Bitacora] PRIMARY KEY ([IdBitacora])
);

