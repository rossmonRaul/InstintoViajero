CREATE TABLE [dbo].[Clientes](
    [IdCliente]           INT            IDENTITY (1, 1) NOT NULL,
    [IdPersona]           INT             NOT NULL,
    [Estado]              BIT             NOT NULL,
    [FechaCreacion]       DATETIME        NULL,  
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
    CONSTRAINT [PK_Clientes] PRIMARY KEY ([IdCliente]),
    CONSTRAINT [FK_Clientes_Personas] FOREIGN KEY ([IdPersona])
        REFERENCES [dbo].[Personas]([IdPersona]),
);

