SET IDENTITY_INSERT [dbo].[Usuarios] ON 

INSERT [dbo].[Usuarios] ([IdUsuario], [IdPersona], [IdRol], [CoreoElectronico], [ContrasenaTemporal], [Contrasena], [Estado], [IdSucursal], [FechaCreacion], [FechaModificacion], [UsuarioCreacion], [UsuarioModificacion]) VALUES (1, 1, 1, N'administrador@rossmon.co.cr', NULL, 0x020000008FB3901AE604A0CE874825BFAB1B666A09253DFE22CD0654B9C42C537788EFA8003441EBC7DD264B8901012CA054EA06, 1, 1, CAST(N'2023-05-18T17:01:49.020' AS DateTime), NULL, N'1', NULL)
INSERT [dbo].[Usuarios] ([IdUsuario], [IdPersona], [IdRol], [CoreoElectronico], [ContrasenaTemporal], [Contrasena], [Estado], [IdSucursal], [FechaCreacion], [FechaModificacion], [UsuarioCreacion], [UsuarioModificacion]) VALUES (2, 2, 2, N'ventas@rossmon.co.cr', NULL, 0x020000002AC44CE4B05E81B24EB858C5E5EF2BDD54E9F34300C0030BEF60EE9ACBAFB45783BFD4AE940D643D6D7B57794579F0CD, 1, 1, CAST(N'2023-05-18T17:22:40.513' AS DateTime), NULL, N'1', NULL)

SET IDENTITY_INSERT [dbo].[Usuarios] OFF