CREATE TABLE [INSTINTO_VIAJERO].[Sucursales] (
    [IdSucursal]          INT            IDENTITY (1, 1) NOT NULL,
    [NombreSucursal]      NVARCHAR (100) NOT NULL,
    [Estado]              BIT            NOT NULL,
    [Ubicacion]           VARCHAR (100)  NOT NULL,
    [FechaCreacion]       DATETIME       NULL,
    [FechaModificacion]   DATETIME       NULL,
    [UsuarioCreacion]     NVARCHAR (MAX) NULL,
    [UsuarioModificacion] NVARCHAR (MAX) NULL,
    [Accion]              VARCHAR (1)    NULL,
    CONSTRAINT [Sucursales_PK] PRIMARY KEY CLUSTERED ([IdSucursal] ASC) WITH (DATA_COMPRESSION = PAGE)
);

