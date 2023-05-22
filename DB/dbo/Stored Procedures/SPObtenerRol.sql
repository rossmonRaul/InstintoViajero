CREATE   procedure [dbo].[SPObtenerRol] 
(
@rol varchar(50)
)
as 

BEGIN
		BEGIN TRY
			BEGIN
				Select 
				IdRol,
				Descripcion,
				CASE WHEN Estado = 1 THEN 'Activo' ELSE 'Inactivo' END AS Estado
				from Roles  WITH (NOLOCK)
				where Descripcion=@rol
			END

			END TRY
			BEGIN CATCH
				SELECT 1, ERROR_MESSAGE() AS MENSAJE
			END CATCH
end
