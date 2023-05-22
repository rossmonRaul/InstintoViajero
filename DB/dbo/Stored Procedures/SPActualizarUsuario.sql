CREATE PROCEDURE [dbo].[SPActualizarUsuario]

( @IdUsuario INT
 ,@IdPersona INT
 ,@IdRol INT
, @CoreoElectronico NVARCHAR (100)
, @IdSucursal INT
, @Identificacion INT
, @IdTipoIdentificacion INT
, @Nombre NVARCHAR (50)
, @PrimerApellido NVARCHAR (50)
, @SegundoApellido NVARCHAR (50)
, @FechaNacimiento DATE
, @Direccion NVARCHAR (100)
, @Telefono NVARCHAR (10)
,@INDICADOR INT OUT
,@MENSAJE VARCHAR(50) OUT
)

AS

    BEGIN
            BEGIN TRY
                BEGIN TRAN ACTUALIZAR
                    BEGIN
                        UPDATE        Usuarios SET
                                      IdRol = @IdRol
                                    , CoreoElectronico = @CoreoElectronico                                 
                                    , IdSucursal = @IdSucursal
                                    , FechaModificacion = GETDATE()
                                    , UsuarioModificacion = '1'
                                    , Accion = 'A'
                                    WHERE IdUsuario = @IdUsuario
                    END
                    BEGIN
                        UPDATE Personas SET
                        Identificacion = @Identificacion
                        , IdTipoIdentificacion = @IdTipoIdentificacion
                        , Nombre = @Nombre
                        , PrimerApellido = @PrimerApellido
                        , SegundoApellido = @SegundoApellido
                        , FechaNacimiento = @FechaNacimiento
                        , Direccion = @Direccion
                        , Telefono = @Telefono
                        , FechaModificacion = GETDATE()
                        , UsuarioModificacion = '1'
                        , Accion = 'A'
                        WHERE IdPersona = @IdPersona
                    END
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'El Usuario ha sido actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END
SET QUOTED_IDENTIFIER ON
