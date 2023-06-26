CREATE TABLE [dbo].[EstadosPlan](
    [IdEstadoPlan]        INT            IDENTITY (1, 1) NOT NULL,
	[CodEstadoPlan]       NVARCHAR(16)    NOT NULL,
	[DescEstadoPlan]      NVARCHAR(30)    NOT NULL,
    [Estado]              BIT             NOT NULL,
    [FechaCreacion]       DATETIME        NULL,  
    [FechaModificacion]   DATETIME        NULL,
    [UsuarioCreacion]     NVARCHAR (MAX)  NULL,
    [UsuarioModificacion] NVARCHAR (MAX)  NULL,
    CONSTRAINT [PK_EstadosPlan] PRIMARY KEY ([IdEstadoPlan]),
);