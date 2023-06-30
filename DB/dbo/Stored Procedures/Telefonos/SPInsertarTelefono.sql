CREATE PROCEDURE [dbo].[SPInsertarTelefono]
( 
  @IdTipoDeTelefono INT
, @IdPersona INT
, @Numero NVARCHAR(9)
, @Estado BIT
, @Usuario NVARCHAR(MAX)
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
                        INSERT INTO Telefonos
                        (
                              IdTipoDeTelefono
							, IdPersona
							, Numero
                            , Estado
                            , FechaCreacion
                            , UsuarioCreacion                            
                        ) VALUES 
                        (
                            @IdTipoDeTelefono
							,@IdPersona
							,@Numero
                            , 1
                            , @Vfecha
                            , @Usuario
                        )

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdTipoDeTelefono: ' +  CAST(@IdTipoDeTelefono AS NVARCHAR(10)) + ', ' +
										'IdPersona: ' +  CAST(@IdPersona AS NVARCHAR(10)) + ', ' +
										'Numero: ' + @Numero + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Telefonos', 'I', @vDetalle, @Vfecha, @Usuario;

                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Teléfono registrado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Tipo de registrar el teléfono.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END