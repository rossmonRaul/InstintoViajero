CREATE PROCEDURE [dbo].[SPInsertarComision]

( 
 @IdRol INT
, @PorcentajeComision DECIMAL(4,2)
, @Descripcion VARCHAR(100)  
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
                        INSERT INTO Comisiones
                        (
                            IdRol
                            , PorcentajeComision
                            , Descripcion
							, Estado
                            , FechaCreacion
                            , UsuarioCreacion 							
                        ) VALUES 
                        (
                            @IdRol
                            , @PorcentajeComision
                            , @Descripcion
                            , 1
                            , @Vfecha
                            , @Usuario
                        )
                        
						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdRol: ' + CAST(@IdRol AS NVARCHAR(12)) + ', ' +
                                       'PorcentajeComision: ' + CAST(@PorcentajeComision AS NVARCHAR(5)) + ', ' +
									   'Descripcion: ' + @Descripcion + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Comisiones', 'I', @vDetalle, @Vfecha, @Usuario;

                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Comisión registrada exitosamente.'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al registrar la comisión.'
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END
