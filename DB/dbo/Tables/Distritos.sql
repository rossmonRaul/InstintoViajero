

CREATE TABLE [dbo].[Distritos](
	[id_Distrito] [int] IDENTITY(1,1) NOT NULL,
	[cod_Distrito] [char](4) NOT NULL,
	[id_Canton] [int] NOT NULL,
	[id_Provincia] [int] NOT NULL,
	[dsc_Distrito] [varchar](100) NOT NULL,
	[Usuario_Creacion] [varchar](30) NULL,
	[Fec_Creacion] [datetime] NULL,
	[Usuario_Modificacion] [varchar](30) NULL,
	[Fec_Modificacion] [datetime] NULL,
 CONSTRAINT [Distritos_PK] PRIMARY KEY CLUSTERED 
(
	[id_Distrito] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Distritos]  WITH CHECK ADD  CONSTRAINT [Canton_FK] FOREIGN KEY([id_Canton])
REFERENCES [dbo].[Cantones] ([id_Canton])
GO

ALTER TABLE [dbo].[Distritos] CHECK CONSTRAINT [Canton_FK]
GO

ALTER TABLE [dbo].[Distritos]  WITH CHECK ADD  CONSTRAINT [Provincia_FK] FOREIGN KEY([id_Provincia])
REFERENCES [dbo].[Provincias] ([id_Provincia])
GO

ALTER TABLE [dbo].[Distritos] CHECK CONSTRAINT [Provincia_FK]
GO


