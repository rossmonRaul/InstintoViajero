CREATE TABLE [dbo].[Vendedores](
    [IdVendedor]           INT            IDENTITY (1, 1) NOT NULL,
    [IdPersona]           INT             NOT NULL,
    [CodVendedor]         NVARCHAR(16)    NOT NULL,
    [Estado]              BIT             NOT NULL,
    [IdSucursal]          INT             NOT NULL,
    [FechaContratacion]   DATETIME        NULL,
    [FechaCreacion]       DATETIME        NULL,  
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
    CONSTRAINT [PK_Vendedores] PRIMARY KEY ([IdVendedor]),
    CONSTRAINT [FK_Vendedores_Personas] FOREIGN KEY ([IdPersona])
        REFERENCES [dbo].[Personas]([IdPersona]),
    CONSTRAINT [FK_Vendedores_Sucursales] FOREIGN KEY ([IdSucursal])
        REFERENCES [dbo].[Sucursales]([IdSucursal])
);


