﻿CREATE PROCEDURE [dbo].[SPInsertarVendedor]

( 
  @IdPersona INT
, @CodVendedor NVARCHAR(16)
, @IdSucursal INT
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
                BEGIN TRAN INSERTAR
                    BEGIN
                        INSERT INTO Vendedores
                        (
                            IdPersona
                            , CodVendedor
                            , IdSucursal
							, FechaContratacion
                            , Estado
                            , FechaCreacion
                            , UsuarioCreacion                            
                        ) VALUES 
                        (
                            @IdPersona
                            , @CodVendedor
                            , @IdSucursal
                            , @FechaContratacion
                            , 1
                            , @Vfecha
                            , '1'
                        )

						-- Ejecuta SPInsertarBitacora
						DECLARE @vDetalle NVARCHAR(600);						
						SET @vDetalle = 'IdPersona: ' + CAST(@IdPersona AS NVARCHAR(12)) + ', ' +
                                       'CodVendedor: ' + @CodVendedor + ', ' +
									   'IdSucursal: ' + CAST(@IdSucursal AS NVARCHAR(12)) + ', ' +
									   'FechaContratacion: ' + CAST(@FechaContratacion AS NVARCHAR(12)) + ', ' +
									   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

						EXEC [dbo].[SPInsertarBitacora] 'Vendedores', 'I', @vDetalle, @Vfecha, '1';

                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Exito: Vendedor registrado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al registrar el vendedor.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END