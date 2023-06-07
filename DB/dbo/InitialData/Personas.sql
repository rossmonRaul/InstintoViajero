SET IDENTITY_INSERT [dbo].[Personas] ON 

INSERT [dbo].[Personas] ([IdPersona], [Identificacion], [IdTipoIdentificacion], [Nombre], [PrimerApellido], [SegundoApellido], [FechaNacimiento], [Direccion], [Telefono], [Estado], [FechaCreacion], [FechaModificacion], [UsuarioCreacion], [UsuarioModificacion]) VALUES (1, 999999999, 1, N'Administrador', N'Desarrollo', N'Pruebas', CAST(N'1980-12-01' AS Date), N'Canoas', N'89425227', 1, CAST(N'2023-05-18T17:01:49.017' AS DateTime), NULL, N'1', NULL)
INSERT [dbo].[Personas] ([IdPersona], [Identificacion], [IdTipoIdentificacion], [Nombre], [PrimerApellido], [SegundoApellido], [FechaNacimiento], [Direccion], [Telefono], [Estado], [FechaCreacion], [FechaModificacion], [UsuarioCreacion], [UsuarioModificacion]) VALUES (2, 101230123, 1, N'Ventas', N'Desarrollo', N'Pruebas', CAST(N'2009-01-01' AS Date), N'Paso Canoas, Corredores', N'89425227', 1, CAST(N'2023-05-18T17:22:40.513' AS DateTime), NULL, N'1', NULL)

SET IDENTITY_INSERT [dbo].[Personas] OFF