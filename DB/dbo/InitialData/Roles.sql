SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([IdRol], [Descripcion], [Estado], [FechaCreacion], [FechaModificacion], [UsuarioCreacion], [UsuarioModificacion], [Accion]) VALUES (1, N'Administrador', 1, CAST(N'2022-06-27T00:00:00.000' AS DateTime), NULL, N'304940351', NULL, N'1')
INSERT [dbo].[Roles] ([IdRol], [Descripcion], [Estado], [FechaCreacion], [FechaModificacion], [UsuarioCreacion], [UsuarioModificacion], [Accion]) VALUES (2, N'Ventas', 1, CAST(N'2022-06-27T00:00:00.000' AS DateTime), NULL, N'304940351', NULL, N'1')

SET IDENTITY_INSERT [dbo].[Roles] OFF