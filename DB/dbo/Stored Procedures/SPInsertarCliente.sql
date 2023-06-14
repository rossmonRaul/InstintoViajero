CREATE PROCEDURE [dbo].[SPInsertarCliente]

( 
  @IdPersona INT
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
                        INSERT INTO Clientes
                        (
                            IdPersona                         
                            , Estado
                            , FechaCreacion
                            , UsuarioCreacion                            
                        ) VALUES 
                        (
                            @IdPersona
                            , 1
                            , @Vfecha
                            , @Usuario
                        )

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdPersona: ' + CAST(@IdPersona AS NVARCHAR(12)) + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Clientes', 'I', @vDetalle, @Vfecha, @Usuario;

                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Exito: Cliente registrado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END