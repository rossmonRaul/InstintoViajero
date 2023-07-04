CREATE PROCEDURE [dbo].[SPInsertarCorreoElectronico]
( 
  @IdPersona INT
, @CorreoElectronico NVARCHAR(100)
, @Principal BIT
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
                        INSERT INTO CorreosElectronicos
                        (                              
							  IdPersona
							, CorreoElectronico
                            , Principal
                            , Estado
                            , FechaCreacion
                            , UsuarioCreacion                            
                        ) VALUES 
                        (
							@IdPersona
							,@CorreoElectronico
                            ,@Principal
                            , 1
                            , @Vfecha
                            , @Usuario
                        )

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdPersona: ' +  CAST(@IdPersona AS NVARCHAR(10)) + ', ' +
										'CorreoElectronico: ' + @CorreoElectronico + ', ' +
                                        'Principal: ' + CAST(@Principal AS NVARCHAR(1)) +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'CorreosElectronicos', 'I', @vDetalle, @Vfecha, @Usuario;

                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Email registrado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al registrar el Email.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END