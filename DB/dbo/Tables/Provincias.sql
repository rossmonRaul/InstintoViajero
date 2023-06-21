

CREATE TABLE [dbo].[Provincias](
	[id_Provincia] [int] IDENTITY(1,1) NOT NULL,
	[dsc_Provincia] [varchar](20) NOT NULL,
	[Usuario_Creacion] [varchar](30) NULL,
	[Fec_Creacion] [datetime] NULL,
	[Usuario_Modificacion] [varchar](30) NULL,
	[Fec_Modificacion] [datetime] NULL,
 CONSTRAINT [Provincias_PK] PRIMARY KEY CLUSTERED 
(
	[id_Provincia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


