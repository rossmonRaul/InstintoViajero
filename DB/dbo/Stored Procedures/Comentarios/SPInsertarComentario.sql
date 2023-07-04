CREATE PROCEDURE [dbo].[SPInsertarComentario]
( 
  @IndicadorPlan INT  --1 CLUB , 2 PAQUETE 
, @IdPlan  INT
, @Comentario NVARCHAR(MAX)
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
						IF @INDICADOR = 1  --1 CLUB
						BEGIN
							INSERT INTO ComentariosClubDeViaje
							(
								 IdClubDeViaje
								, Comentario
								, Estado
								, FechaCreacion
								, UsuarioCreacion                            
							) VALUES 
							(                           
								@IdPlan
								,@Comentario
								, 1
								, @Vfecha
								, @Usuario
							)

							-- Ejecuta SPInsertarBitacora
							DECLARE @vDetalle NVARCHAR(600);						
							SET @vDetalle = 'IdClubDeViaje: ' +  CAST(@IdPlan AS NVARCHAR(10)) + ', ' +
										'Comentario: ' + @Comentario + ', ' +
										   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

							EXEC [dbo].[SPInsertarBitacora] 'ComentariosClubDeViaje', 'I', @vDetalle, @Vfecha, @Usuario;
						END	
						ELSE IF @INDICADOR = 2 -- 2 PAQUETE 
						BEGIN
						INSERT INTO ComentariosPaquete
							(
								 IdPaquete
								, Comentario
								, Estado
								, FechaCreacion
								, UsuarioCreacion                            
							) VALUES 
							(                           
								@IdPlan
								,@Comentario
								, 1
								, @Vfecha
								, @Usuario
							)

							-- Ejecuta SPInsertarBitacora
							DECLARE @vDetalleP NVARCHAR(600);						
							SET @vDetalleP = 'IdPaquete: ' +  CAST(@IdPlan AS NVARCHAR(10)) + ', ' +
										'Comentario: ' + @Comentario + ', ' +
										   'Estado: ' + CAST(@Estado AS NVARCHAR(1));

							EXEC [dbo].[SPInsertarBitacora] 'ComentariosPaquete', 'I', @vDetalleP, @Vfecha, @Usuario;

						END
                    END

                    COMMIT TRAN INSERTAR
                    SET @INDICADOR = 0
                    SET @MENSAJE = 'Comentario registrado exitosamente'
            END TRY
            BEGIN CATCH
                SET @INDICADOR = 1
                SET @MENSAJE = 'Error al registrar el comentario.' --+ ERROR_MESSAGE()
                ROLLBACK TRANSACTION INSERTAR
            END CATCH
    END