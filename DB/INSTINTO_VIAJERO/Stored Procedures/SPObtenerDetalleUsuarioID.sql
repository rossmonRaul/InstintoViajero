--- =============================================
-- Author: Jorge Fernández González
-- Create date: 22/5/2023
-- Description:	Obtener Usuario
--
-- Author: 
-- Modification date: 
-- Modification Description: 
-- =============================================

CREATE PROCEDURE [INSTINTO_VIAJERO].[SPObtenerDetalleUsuarioID]
( @IdUsuario INT )
AS
    BEGIN
        BEGIN TRY
            BEGIN
                SELECT       U.IdUsuario            
            , P.IdPersona
            , P.IdTipoIdentificacion
            , TP.Descripcion 'DescripcionTipoIdentificacion'
            , P.Identificacion
            , P.Nombre
            , P.PrimerApellido
            , P.SegundoApellido
            , P.Telefono            
            , R.IdRol
            , R.Descripcion 'DescripcionRol'
            , S.IdSucursal
            , S.NombreSucursal
            , P.FechaNacimiento
            , P.Direccion
            , U.CoreoElectronico
                FROM        Usuarios U   WITH (NOLOCK) 
                INNER JOIN    Personas P
                ON            U.IdPersona = P.IdPersona
                INNER JOIN    Roles R
                ON            U.IdRol = R.IdRol
                INNER JOIN    Sucursales S
                ON            U.IdSucursal = S.IdSucursal
                INNER JOIN TiposIdentificacion TP
                ON TP.IdTipoIdentificacion = P.IdTipoIdentificacion
                WHERE        U.IdUsuario = @IdUsuario
            END
            END TRY
            BEGIN CATCH
            SELECT 1, ERROR_MESSAGE() AS MENSAJE
            END CATCH
    END