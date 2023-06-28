CREATE PROCEDURE [dbo].[SPActualizarComision]

( @IdComision INT,
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
                BEGIN TRAN ACTUALIZAR
                    BEGIN
                        UPDATE       Comisiones SET
									 IdRol = @IdRol
									, PorcentajeComision = @PorcentajeComision
									, Descripcion = @Descripcion
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = @Usuario
                                    WHERE IdComision = @IdComision

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdComision: ' + CAST(@IdComision AS NVARCHAR(12)) + ', ' +
									   'IdRol: ' + CAST(@IdRol AS NVARCHAR(12)) + ', ' +
									   'PorcentajeComision: ' + CAST(@PorcentajeComision AS NVARCHAR(5)) + ', ' +
									   'Descripcion: ' + @Descripcion + ', ' +
                                       'UsuarioModificacion: ' + @Usuario + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Comisiones', 'A', @vDetalle, @Vfecha, @Usuario;
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'El estado de la comisión ha sido actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al actualizar el estado de la comisión.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END