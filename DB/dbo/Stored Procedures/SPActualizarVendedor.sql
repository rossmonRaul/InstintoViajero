CREATE PROCEDURE [dbo].[SPActualizarVendedor]

( @IdVendedor INT
, @IdPersona INT
, @IdSucursal INT
, @CodVendedor NVARCHAR(16)
, @FechaContratacion DATE
, @Estado BIT
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
                        UPDATE        Vendedores SET
                                      IdPersona = @IdPersona
                                    , IdSucursal = @IdSucursal  
                                    , CodVendedor =@CodVendedor
                                    , FechaContratacion = @FechaContratacion
									, Estado = @Estado
                                    , FechaModificacion = @Vfecha
                                    , UsuarioModificacion = '1'
                                    WHERE IdVendedor = @IdVendedor

					-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdVendedor: ' + CAST(@IdVendedor AS NVARCHAR(12)) + ', ' + 
									   'IdPersona: ' + CAST(@IdPersona AS NVARCHAR(12)) + ', ' +
									   'IdSucursal: ' + CAST(@IdSucursal AS NVARCHAR(12)) + ', ' +
                                       'CodVendedor: ' + @CodVendedor + ', ' +
									   'FechaContratacion: ' + CAST(@FechaContratacion AS NVARCHAR(12)) + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Vendedores', 'A', @vDetalle, @Vfecha, '1';
					--

                    END                   
            COMMIT TRAN ACTUALIZAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'El Vendedor ha sido actualizado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error: ' + ERROR_MESSAGE()
                ROLLBACK TRANSACTION ACTUALIZAR
            END CATCH
    END