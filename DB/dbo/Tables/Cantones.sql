CREATE TABLE [dbo].[Cantones](
	[id_Canton] [int] IDENTITY(1,1) NOT NULL,
	[cod_Cantones] [varchar](3) NOT NULL,
	[id_Provincia] [int] NOT NULL,
	[dsc_Canton] [varchar](70) NOT NULL,
	[Usuario_Creacion] [varchar](30) NULL,
	[Fec_Creacion] [datetime] NULL,
	[Usuario_Modificacion] [varchar](30) NULL,
	[Fec_Modificacion] [datetime] NULL,
 CONSTRAINT [Cantones_PK] PRIMARY KEY CLUSTERED 
(
	[id_Canton] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Cantones]  WITH CHECK ADD  CONSTRAINT [Provincias_FK_01] FOREIGN KEY([id_Provincia])
REFERENCES [dbo].[Provincias] ([id_Provincia])
GO

ALTER TABLE [dbo].[Cantones] CHECK CONSTRAINT [Provincias_FK_01]
GO


