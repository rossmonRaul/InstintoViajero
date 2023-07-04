CREATE PROCEDURE [dbo].[SPInsertarTipoDeTelefono]

( 
  @Descripcion NVARCHAR(30)
, @Estado BIT
, @Usuario NVARCHAR(MAX) = NULL
, @INDICADOR INT OUT
, @MENSAJE VARCHAR(50) OUT
)

AS

    BEGIN
		DECLARE @Vfecha DATETIME;
		SET @Vfecha = GETDATE();

            BEGIN TRY
                BEGIN TRAN INSERTAR
                    BEGIN
                        INSERT INTO TiposDeTelefono
                        (
                            Descripcion
                            , Estado
                            , FechaCreacion
                            , UsuarioCreacion                            
                        ) VALUES 
                        (
                            @Descripcion
                            , 1
                            , @Vfecha
                            , @Usuario
                        )

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'Descripcion: ' + @Descripcion + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'TiposDeTelefono', 'I', @vDetalle, @Vfecha, @Usuario;

                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Tipo de Teléfono registrado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al registrar el tipo de teléfono.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END