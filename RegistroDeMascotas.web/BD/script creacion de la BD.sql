CREATE DATABASE [MascotasBD]

USE [MascotasBD]
GO
/****** Object:  Table [dbo].[Tabla_Generica]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tabla_Generica](
	[Id_Generica] [int] IDENTITY(1,1) NOT NULL,
	[CodigoTabla] [int] NULL,
	[CodigoFila] [int] NULL,
	[DescripcionCorta] [varchar](100) NULL,
	[Valor1] [varchar](50) NULL,
	[Valor2] [varchar](100) NULL,
	[Valor3] [varchar](100) NULL,
	[Valor4] [varchar](100) NULL,
	[Valor5] [varchar](100) NULL,
	[Estado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id_Generica] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Tabla_Generica] ON 
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (47, 1, 0, N'Genero Personas', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (48, 1, 1, N'Masculino', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (49, 1, 2, N'Femenino', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (50, 2, 0, N'Genero Mascotas', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (51, 2, 1, N'Macho', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (52, 2, 2, N'Hembra', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (53, 3, 0, N'Color Mascota', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (54, 3, 1, N'Negro', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (55, 3, 2, N'Blanco', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (56, 3, 3, N'Gris', N'3', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (57, 3, 4, N'Marron', N'4', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (58, 4, 0, N'Tamaño Mascota', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (59, 4, 1, N'Pequeño', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (60, 4, 2, N'Mediano', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (61, 4, 3, N'Grande', N'3', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (62, 5, 0, N'Raza Mascota', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (63, 5, 1, N'Pastor Alemán', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (64, 5, 2, N'Labrador', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (65, 5, 3, N'Yorkshire terrier', N'3', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (66, 5, 4, N'Beagle ', N'4', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (67, 5, 5, N'Chihuahua', N'5', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (68, 5, 6, N'Danés', N'6', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (69, 6, 0, N'Cola Mascota', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (70, 6, 1, N'Cola Corta', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (71, 6, 2, N'Cola Larga', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (72, 7, 0, N'Orejas Mascota', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (73, 7, 1, N'Orejas paradas (Naturales)', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (74, 7, 2, N'Orejas paradas (Cortadas)', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (75, 7, 3, N'Orejas caídas', N'3', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (76, 7, 4, N'Orejas caídas muy largas', N'4', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (77, 8, 0, N'Preguntas de Seguridad Usuario', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (78, 8, 1, N'¿Cuál es el nombre de tu primera mascota?', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (79, 8, 2, N'¿Cuál sería tu trabajo ideal?', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (80, 8, 3, N'¿En qué ciudad se conocieron tus padres?', N'3', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (81, 9, 0, N'Tipo Documento', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (82, 9, 1, N'DNI', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (83, 9, 2, N'Carnes de Extranjeria', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (84, 10, 0, N'Estados de Mascotas', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (85, 10, 1, N'Perdido', N'0', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (86, 10, 2, N'Encontrado', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (87, 11, 0, N'Distritos', NULL, N'Colores', NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (88, 11, 1, N'San Miguel', N'1', N'#f56954', NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (89, 11, 2, N'San Isidro', N'2', N'#00a65a', NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (90, 11, 3, N'Lince', N'3', N'#f39c12', NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (91, 11, 4, N'Pueblo Libre', N'4', N'#00c0ef', NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (92, 11, 5, N'Comas', N'5', N'#3c8dbc', NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (93, 12, 0, N'Redes Sociales', NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (94, 12, 1, N'Whatsapp', N'1', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (95, 12, 2, N'Facebook', N'2', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (96, 12, 3, N'Instagram', N'3', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (97, 12, 4, N'Twitter', N'4', NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[Tabla_Generica] ([Id_Generica], [CodigoTabla], [CodigoFila], [DescripcionCorta], [Valor1], [Valor2], [Valor3], [Valor4], [Valor5], [Estado]) VALUES (98, 12, 5, N'Snapchat', N'5', NULL, NULL, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[Tabla_Generica] OFF
GO
/****** Object:  StoredProcedure [dbo].[usp_actualizar_credenciales]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_actualizar_credenciales] 
@Id_Usuario          INT, 
@Contrasenia         VARCHAR(5), 
@ReContrasenia       VARCHAR(5), 
@IdPreguntaSeguridad INT, 
@RptaSeguridad       VARCHAR(100), 
@Mensaje              VARCHAR(100) OUTPUT
AS
    BEGIN
        ---- validamos la pregunta 
		set @Mensaje = ''
        IF NOT EXISTS
        (
            SELECT 1
            FROM [Credenciales]
            WHERE IdPreguntaSeguridad = @IdPreguntaSeguridad
                  AND RptaSeguridad LIKE '%' + @RptaSeguridad + '%'
        )
            BEGIN
                SET @Mensaje = 'La pregunta de seguridad y la respuesta es incorrecta, Por favor intentar nuevamente.';
                RETURN;
            END;

        BEGIN TRY
            BEGIN TRANSACTION;
            UPDATE [dbo].[Credenciales]
              SET 
                  [Contrasenia] = @Contrasenia, 
                  [ReContrasenia] = @ReContrasenia
            WHERE [Id_Usuario] = @Id_Usuario;
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_actualizar_mascota]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_actualizar_mascota] 
@Id_Usuario           INT, 
@Id_Mascotas          INT, 
@Nombre               VARCHAR(20), 
@IdGenero             INT, 
@IdColor              INT, 
@IdTamanio            INT, 
@IdRaza               INT, 
@IdCola               INT, 
@IdOrejas             INT, 
@Edad                 VARCHAR(2), 
@DescripcionAdicional VARCHAR(250)
AS
    BEGIN
        BEGIN TRY
            BEGIN TRANSACTION;
            UPDATE [dbo].[Mascotas]
              SET --,[DIP_Autogenerado] = <DIP_Autogenerado, varchar(20),>
                  [Nombre] = @Nombre, 
                  [IdGenero] = @IdGenero, 
                  [IdColor] = @IdColor, 
                  [IdTamanio] = @IdTamanio, 
                  [IdRaza] = @IdRaza, 
                  [IdCola] = @IdCola, 
                  [IdOrejas] = @IdOrejas, 
                  [Edad] = @Edad, 
                  [DescripcionAdicional] = @DescripcionAdicional
            WHERE Id_Mascotas = @Id_Mascotas
                  AND [Id_Usuario] = @Id_Usuario;
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_actualizar_usuario]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_actualizar_usuario] 
@Id_Usuario   INT, 
@Nombres      VARCHAR(20), 
@ApePaterno   VARCHAR(30), 
@ApeMaterno   VARCHAR(30), 
@Correo       VARCHAR(100), 
@Celular      INT, 
@TelefonoFijo INT, 
@IdGenero     INT
AS
    BEGIN
        BEGIN TRY
            BEGIN TRANSACTION;
            UPDATE [dbo].[Usuario]
              SET 
                  [Nombres] = @Nombres, 
                  [ApePaterno] = @ApePaterno, 
                  [ApeMaterno] = @ApeMaterno, 
                  [Correo] = @Correo, 
                  [Celular] = @Celular, 
                  [TelefonoFijo] = @TelefonoFijo
            WHERE Id_Usuario = @Id_Usuario;
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_eliminar_contactos_mascotas]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 
CREATE PROC [dbo].[usp_eliminar_contactos_mascotas] 
@IdReportarMascota        INT
AS
    BEGIN 
        BEGIN TRY
            BEGIN TRANSACTION;
            
			DELETE FROM [dbo].[Contacto]
				WHERE Id_ReportarMascota = @IdReportarMascota
 
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;



GO
/****** Object:  StoredProcedure [dbo].[usp_eliminar_imagenes_mascotas]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 
CREATE PROC [dbo].[usp_eliminar_imagenes_mascotas] 
@Id_Mascotas        INT
AS
    BEGIN 
        BEGIN TRY
            BEGIN TRANSACTION;
            
			DELETE FROM [dbo].[Imagenes]
			WHERE Id_Mascotas = @Id_Mascotas
  
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;



GO
/****** Object:  StoredProcedure [dbo].[usp_eliminar_mascotas]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 
CREATE PROC [dbo].[usp_eliminar_mascotas] 
@Id_Mascotas        INT
AS
    BEGIN 
        BEGIN TRY
            BEGIN TRANSACTION;
            
			UPDATE [dbo].[Mascotas]
			SET [Estado] = 0
			WHERE Id_Mascotas = @Id_Mascotas
  
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;



GO
/****** Object:  StoredProcedure [dbo].[usp_iniciar_session]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_iniciar_session] 
@NumDocumento varchar(15),
@Contrasenia varchar(5)
AS
    BEGIN
        SET NOCOUNT ON;

        SELECT u.[Id_Usuario], 
               u.[IdTipoDocumento], 
               u.[NumDocumento], 
               CONCAT(u.[Nombres],' ',u.[ApePaterno],' ', u.[ApeMaterno]) as Nombres, 
               u.[Correo], 
               u.[Celular], 
               u.[TelefonoFijo], 
               u.[IdGenero],
			   --- credenciales
			   c.Contrasenia,
			   c.IdPreguntaSeguridad,
			   c.RptaSeguridad
        FROM [dbo].[Usuario] u 
		inner join Credenciales c on c.Id_Usuario = u.Id_Usuario
        WHERE u.NumDocumento = @NumDocumento
		and c.Contrasenia = @Contrasenia
		
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_listar_mascotas_encontrada]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_listar_mascotas_encontrada] 
@IdGenero             INT          = NULL, 
@IdColor              INT          = NULL, 
@IdTamanio            INT          = NULL, 
@IdRaza               INT          = NULL, 
@IdCola               INT          = NULL, 
@IdOrejas             INT          = NULL, 
@DescripcionAdicional VARCHAR(100) = NULL,
@NombreMascota        VARCHAR(20)  = NULL, 
@DipAuto              VARCHAR(20)  = NULL
--@NumPagina            INT          = 1, 
--@TamPagina            INT          = 10
AS
    BEGIN
        SET NOCOUNT ON;
        --WITH CTE
        --     AS (

        SELECT m.[Id_Mascotas], 
               [Id_Usuario], 
               [DIP_Autogenerado], 
               [Nombre], 
               [IdGenero], 
               tb0.DescripcionCorta AS DesGenero, 
               [IdColor], 
               tb1.DescripcionCorta AS DesColor, 
               [IdTamanio], 
               tb2.DescripcionCorta AS DesTamanio, 
               [IdRaza], 
               tb3.DescripcionCorta AS DesRaza, 
               [IdCola], 
               tb4.DescripcionCorta AS DesCola, 
               [IdOrejas], 
               tb5.DescripcionCorta AS DesOrejas, 
               [Edad], 
               [DescripcionAdicional], 
               --- reporta mascota
               ISNULL(rm.Id_ReportarMascota, 0) AS Id_ReportarMascota, 
               ISNULL(CONVERT(VARCHAR, CAST(rm.FechaPerdida AS DATE), 120), '') AS FechaPerdida, 
               ISNULL(CONVERT(VARCHAR, CAST(rm.FechaEncontrado AS DATE), 120), '') AS FechaEncontrado, 
               ISNULL(rm.IdDistrito, 0) AS IdDistrito, 
			   ISNULL(tb6.DescripcionCorta, '') AS DesDistrito,
               ISNULL(rm.Direccion, '') AS Direccion, 
               ISNULL(rm.CheckPerdida, 0) AS CheckPerdida, 
               ISNULL(rm.DetPerdida, '') AS DetPerdida,  
               --- imagenes de mascota
			   i.Id_Imagenes,
               i.NombreArchivo, 
               i.Foto
        FROM [dbo].[Mascotas] m
             INNER JOIN Tabla_Generica tb0 ON tb0.Valor1 = m.IdGenero
                                              AND tb0.CodigoTabla = 2
             INNER JOIN Tabla_Generica tb1 ON tb1.Valor1 = m.IdColor
                                              AND tb1.CodigoTabla = 3
             INNER JOIN Tabla_Generica tb2 ON tb2.Valor1 = m.IdTamanio
                                              AND tb2.CodigoTabla = 4
             INNER JOIN Tabla_Generica tb3 ON tb3.Valor1 = m.IdRaza
                                              AND tb3.CodigoTabla = 5
             INNER JOIN Tabla_Generica tb4 ON tb4.Valor1 = m.IdCola
                                              AND tb4.CodigoTabla = 6
             INNER JOIN Tabla_Generica tb5 ON tb5.Valor1 = m.IdOrejas
                                              AND tb5.CodigoTabla = 7
             INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
             INNER JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                              AND tb6.CodigoTabla = 11
             INNER JOIN Imagenes i ON i.Id_Mascotas = rm.Id_Mascotas
                                      AND i.ImagenPrincipal = 1
        WHERE rm.CheckPerdida = 1 -- se encuentra encontrada
              AND m.Estado = 1
              AND (ISNULL(@IdGenero, 0) = 0
                   OR @IdGenero = IdGenero)
              AND (ISNULL(@IdColor, 0) = 0
                   OR @IdColor = IdColor)
              AND (ISNULL(@IdTamanio, 0) = 0
                   OR @IdTamanio = IdTamanio)
              AND (ISNULL(@IdRaza, 0) = 0
                   OR @IdRaza = IdRaza)
              AND (ISNULL(@IdCola, 0) = 0
                   OR @IdCola = IdCola)
              AND (ISNULL(@IdOrejas, 0) = 0
                   OR @IdOrejas = IdOrejas)
              AND (ISNULL(@DescripcionAdicional, 'X') = 'X'
                   OR LOWER(DescripcionAdicional) LIKE '%' + LOWER(@DescripcionAdicional) + '%')
              AND (ISNULL(@NombreMascota, 'X') = 'X'
                   OR LOWER(m.Nombre) LIKE '%' + LOWER(@NombreMascota) + '%')
              AND (ISNULL(@DipAuto, 'X') = 'X'
                   OR LOWER(m.DIP_Autogenerado) LIKE '%' + LOWER(@DipAuto) + '%')
			ORDER BY m.Id_Mascotas desc

        --),
        --         COUNT_CTE
        --         AS (SELECT COUNT(*) AS TotalRows
        --             FROM CTE)
        --         SELECT *
        --         FROM CTE, 
        --              COUNT_CTE
        --         ORDER BY Id_Mascotas DESC
        --         OFFSET @TamPagina * (@NumPagina) ROWS FETCH NEXT @TamPagina ROWS ONLY OPTION(RECOMPILE);
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_listar_mascotas_perdidas]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_listar_mascotas_perdidas] 
@IdGenero             INT          = NULL, 
@IdColor              INT          = NULL, 
@IdTamanio            INT          = NULL, 
@IdRaza               INT          = NULL, 
@IdCola               INT          = NULL, 
@IdOrejas             INT          = NULL, 
@DescripcionAdicional VARCHAR(100) = NULL, 
@NombreMascota        VARCHAR(20)  = NULL, 
@DipAuto              VARCHAR(20)  = NULL
--@NumPagina            INT          = NULL, 
--@TamPagina            INT          = NULL
AS
    BEGIN
        SET NOCOUNT ON;
        --WITH CTE
        --     AS (
        SELECT m.[Id_Mascotas], 
               [Id_Usuario], 
               [DIP_Autogenerado], 
               [Nombre], 
               [IdGenero], 
               tb0.DescripcionCorta AS DesGenero, 
               [IdColor], 
               tb1.DescripcionCorta AS DesColor, 
               [IdTamanio], 
               tb2.DescripcionCorta AS DesTamanio, 
               [IdRaza], 
               tb3.DescripcionCorta AS DesRaza, 
               [IdCola], 
               tb4.DescripcionCorta AS DesCola, 
               [IdOrejas], 
               tb5.DescripcionCorta AS DesOrejas, 
               [Edad], 
               [DescripcionAdicional],
               --- reporta mascota
               ISNULL(rm.Id_ReportarMascota, 0) AS Id_ReportarMascota, 
               ISNULL(CONVERT(VARCHAR, CAST(rm.FechaPerdida AS DATE), 120), '') AS FechaPerdida, 
               ISNULL(CONVERT(VARCHAR, CAST(rm.FechaEncontrado AS DATE), 120), '') AS FechaEncontrado, 
               ISNULL(rm.IdDistrito, 0) AS IdDistrito, 
			   ISNULL(tb6.DescripcionCorta, '') AS DesDistrito,
               ISNULL(rm.Direccion, '') AS Direccion, 
               ISNULL(rm.CheckPerdida, 0) AS CheckPerdida, 
               ISNULL(rm.DetPerdida, '') AS DetPerdida,  
               --- imagenes de mascota
               i.Id_Imagenes, 
               i.NombreArchivo, 
               i.Foto
        FROM [dbo].[Mascotas] m
             INNER JOIN Tabla_Generica tb0 ON tb0.Valor1 = m.IdGenero
                                              AND tb0.CodigoTabla = 2
             INNER JOIN Tabla_Generica tb1 ON tb1.Valor1 = m.IdColor
                                              AND tb1.CodigoTabla = 3
             INNER JOIN Tabla_Generica tb2 ON tb2.Valor1 = m.IdTamanio
                                              AND tb2.CodigoTabla = 4
             INNER JOIN Tabla_Generica tb3 ON tb3.Valor1 = m.IdRaza
                                              AND tb3.CodigoTabla = 5
             INNER JOIN Tabla_Generica tb4 ON tb4.Valor1 = m.IdCola
                                              AND tb4.CodigoTabla = 6
             INNER JOIN Tabla_Generica tb5 ON tb5.Valor1 = m.IdOrejas
                                              AND tb5.CodigoTabla = 7
             INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
             INNER JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                              AND tb6.CodigoTabla = 11
             INNER JOIN Imagenes i ON i.Id_Mascotas = rm.Id_Mascotas
                                      AND i.ImagenPrincipal = 1
        WHERE rm.CheckPerdida = 0 -- se encuentra perdido 
              AND m.Estado = 1
              AND (ISNULL(@IdGenero, 0) = 0
                   OR @IdGenero = IdGenero)
              AND (ISNULL(@IdColor, 0) = 0
                   OR @IdColor = IdColor)
              AND (ISNULL(@IdTamanio, 0) = 0
                   OR @IdTamanio = IdTamanio)
              AND (ISNULL(@IdRaza, 0) = 0
                   OR @IdRaza = IdRaza)
              AND (ISNULL(@IdCola, 0) = 0
                   OR @IdCola = IdCola)
              AND (ISNULL(@IdOrejas, 0) = 0
                   OR @IdOrejas = IdOrejas)
              AND (ISNULL(@DescripcionAdicional, 'X') = 'X'
                   OR LOWER(DescripcionAdicional) LIKE '%' + LOWER(@DescripcionAdicional) + '%')
              AND (ISNULL(@NombreMascota, 'X') = 'X'
                   OR LOWER(m.Nombre) LIKE '%' + LOWER(@NombreMascota) + '%')
              AND (ISNULL(@DipAuto, 'X') = 'X'
                   OR LOWER(m.DIP_Autogenerado) LIKE '%' + LOWER(@DipAuto) + '%')
			 ORDER BY m.Id_Mascotas desc


        --),
        --         COUNT_CTE
        --         AS (SELECT COUNT(*) AS TotalRows
        --             FROM CTE)
        --         SELECT *
        --         FROM CTE, 
        --              COUNT_CTE
        --         ORDER BY Id_Mascotas DESC
        --         OFFSET @TamPagina * (@NumPagina) ROWS FETCH NEXT @TamPagina ROWS ONLY OPTION(RECOMPILE);
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_listar_mascotas_registradas]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_listar_mascotas_registradas] 
@Id_Usuario INT
AS
    BEGIN
        SET NOCOUNT ON;
		SELECT m.[Id_Mascotas]
		,[Id_Usuario]
		,[DIP_Autogenerado]
		,[Nombre]
		,[IdGenero]
		,tb0.DescripcionCorta as DesGenero
		,[IdColor]
		,tb1.DescripcionCorta as DesColor
		,[IdTamanio]
		,tb2.DescripcionCorta as DesTamanio
		,[IdRaza]
		,tb3.DescripcionCorta as DesRaza
		,[IdCola]
		,tb4.DescripcionCorta as DesCola
		,[IdOrejas]
		,tb5.DescripcionCorta as DesOrejas
		,[Edad]
		,[DescripcionAdicional],
		--- imagenes de mascota
		i.Id_Imagenes,
		i.NombreArchivo,
		i.Foto
		FROM [dbo].[Mascotas] m
		inner join Tabla_Generica tb0 on tb0.Valor1 = m.IdGenero and tb0.CodigoTabla = 2
		inner join Tabla_Generica tb1 on tb1.Valor1 = m.IdColor and tb1.CodigoTabla = 3
		inner join Tabla_Generica tb2 on tb2.Valor1 = m.IdTamanio and tb2.CodigoTabla = 4
		inner join Tabla_Generica tb3 on tb3.Valor1 = m.IdRaza and tb3.CodigoTabla = 5
		inner join Tabla_Generica tb4 on tb4.Valor1 = m.IdCola and tb4.CodigoTabla = 6
		inner join Tabla_Generica tb5 on tb5.Valor1 = m.IdOrejas and tb5.CodigoTabla = 7 
		inner join Imagenes i on i.Id_Mascotas = m.Id_Mascotas and i.ImagenPrincipal = 1 

		where Id_Usuario = @Id_Usuario
		and m.Estado = 1
		order by Id_Mascotas desc
		


    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_datos_genericos]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_datos_genericos] 
@CodigoTabla INT
AS
    BEGIN
        SET NOCOUNT ON;
        SELECT [Id_Generica], 
               [CodigoTabla], 
               [CodigoFila], 
               [DescripcionCorta], 
               [Valor1], 
               [Valor2], 
               [Valor3], 
               [Valor4], 
               [Valor5], 
               [Estado]
        FROM [dbo].[Tabla_Generica]
        WHERE CodigoTabla = @CodigoTabla
		and CodigoFila <> 0
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_datos_mascotas_detalle]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_datos_mascotas_detalle] 
@Id_Mascotas INT
AS
    BEGIN
        SET NOCOUNT ON;
        SELECT m.[Id_Mascotas], 
               m.[Id_Usuario], 
               [DIP_Autogenerado], 
               [Nombre], 
               m.[IdGenero], 
               tb0.DescripcionCorta AS DesGenero, 
               [IdColor], 
               tb1.DescripcionCorta AS DesColor, 
               [IdTamanio], 
               tb2.DescripcionCorta AS DesTamanio, 
               [IdRaza], 
               tb3.DescripcionCorta AS DesRaza, 
               [IdCola], 
               tb4.DescripcionCorta AS DesCola, 
               [IdOrejas], 
               tb5.DescripcionCorta AS DesOrejas, 
               [Edad], 
               [DescripcionAdicional],
               --- imagenes de mascota - principal
               i.NombreArchivo, 
               i.Foto,
			   i.ImagenPrincipal,
			   --- reporta mascota
			   isnull(rm.Id_ReportarMascota, 0) as Id_ReportarMascota,
               isnull(convert(varchar,cast(rm.FechaPerdida as date), 120),'') as FechaPerdida,
			   isnull(convert(varchar,cast(rm.FechaEncontrado as date), 120),'') as FechaEncontrado,  
               isnull(rm.IdDistrito, 0) as IdDistrito, 
               isnull(rm.Direccion, '') as Direccion, 
			   isnull(rm.CheckPerdida, 0) as CheckPerdida,
			   isnull(rm.DetPerdida, '') as DetPerdida,
               ---- datos del contacto
               CONCAT(u.Nombres, ' ', u.ApePaterno, ' ', u.ApeMaterno) as NombreContacto, 
               u.Celular, 
               u.Correo 
        FROM [dbo].[Mascotas] m
             INNER JOIN Tabla_Generica tb0 ON tb0.Valor1 = m.IdGenero
                                              AND tb0.CodigoTabla = 2
             INNER JOIN Tabla_Generica tb1 ON tb1.Valor1 = m.IdColor
                                              AND tb1.CodigoTabla = 3
             INNER JOIN Tabla_Generica tb2 ON tb2.Valor1 = m.IdTamanio
                                              AND tb2.CodigoTabla = 4
             INNER JOIN Tabla_Generica tb3 ON tb3.Valor1 = m.IdRaza
                                              AND tb3.CodigoTabla = 5
             INNER JOIN Tabla_Generica tb4 ON tb4.Valor1 = m.IdCola
                                              AND tb4.CodigoTabla = 6
             INNER JOIN Tabla_Generica tb5 ON tb5.Valor1 = m.IdOrejas
                                              AND tb5.CodigoTabla = 7
			 left JOIN Imagenes i ON i.Id_Mascotas = m.Id_Mascotas
                                      AND i.ImagenPrincipal = 1
             left JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
             left JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                              AND tb5.CodigoTabla = 11 
             INNER JOIN Usuario u ON u.Id_Usuario = m.Id_Usuario
        WHERE m.Id_Mascotas = @Id_Mascotas;
		 
    END;

GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_datos_mascotas_detalle_imagenes]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_datos_mascotas_detalle_imagenes] 
@Id_Mascotas INT
AS
    BEGIN
        SET NOCOUNT ON;
         
        --- me trae las demas imagenes 
        SELECT NombreArchivo, 
               Foto
        FROM Imagenes
        WHERE Id_Mascotas = @Id_Mascotas
              AND ImagenPrincipal <> 1;
			   
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_datos_mascotas_detalle_redsocial]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_datos_mascotas_detalle_redsocial] 
@Id_Mascotas INT
AS
    BEGIN
        SET NOCOUNT ON; 
        ---- me trae las Red Social  
        SELECT c.Id_Contacto,
			   IdRedSocial, 
			   tg.DescripcionCorta as DesRedSocial,
               RedSocial
        FROM Contacto c
             INNER JOIN ReportarMascota rm ON rm.Id_ReportarMascota = c.Id_ReportarMascota
			 INNER JOIN Tabla_Generica tg on tg.Valor1 = c.IdRedSocial and tg.CodigoTabla = 12
        WHERE rm.Id_Mascotas = @Id_Mascotas;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_datos_usuario]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_datos_usuario] 
@Id_Usuario INT
AS
    BEGIN
        SET NOCOUNT ON;
        SELECT [Id_Usuario], 
               [IdTipoDocumento], 
               [NumDocumento], 
               [Nombres], 
               [ApePaterno], 
               [ApeMaterno], 
               [Correo], 
               [Celular], 
               [TelefonoFijo], 
               [IdGenero]
        FROM [dbo].[Usuario]
        WHERE Id_Usuario = @Id_Usuario;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_mascotas_perdidas_detalle]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_mascotas_perdidas_detalle] 
@Id_Mascotas INT
AS
    BEGIN
        SET NOCOUNT ON;
        SELECT m.[Id_Mascotas], 
               [DIP_Autogenerado], 
               [Nombre], 
               m.[IdGenero], 
               tb0.DescripcionCorta AS DesGenero, 
               [IdColor], 
               tb1.DescripcionCorta AS DesColor, 
               [IdTamanio], 
               tb2.DescripcionCorta AS DesTamanio, 
               [IdRaza], 
               tb3.DescripcionCorta AS DesRaza, 
               [IdCola], 
               tb4.DescripcionCorta AS DesCola, 
               [IdOrejas], 
               tb5.DescripcionCorta AS DesOrejas, 
               [Edad], 
               [DescripcionAdicional],
               --- reporta mascota
               rm.FechaPerdida, 
               rm.IdDistrito, 
               rm.Direccion,
               --- imagenes de mascota - principal
               i.NombreArchivo, 
               i.Foto,
               ---- datos del contacto
               CONCAT(u.Nombres, ' ', u.ApePaterno, ' ', u.ApeMaterno), 
               u.Celular, 
               u.Correo
        FROM [dbo].[Mascotas] m
             INNER JOIN Tabla_Generica tb0 ON tb0.Valor1 = m.IdGenero
                                              AND tb0.CodigoTabla = 2
             INNER JOIN Tabla_Generica tb1 ON tb1.Valor1 = m.IdColor
                                              AND tb1.CodigoTabla = 3
             INNER JOIN Tabla_Generica tb2 ON tb2.Valor1 = m.IdTamanio
                                              AND tb2.CodigoTabla = 4
             INNER JOIN Tabla_Generica tb3 ON tb3.Valor1 = m.IdRaza
                                              AND tb3.CodigoTabla = 5
             INNER JOIN Tabla_Generica tb4 ON tb4.Valor1 = m.IdCola
                                              AND tb4.CodigoTabla = 6
             INNER JOIN Tabla_Generica tb5 ON tb5.Valor1 = m.IdOrejas
                                              AND tb5.CodigoTabla = 7
             INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
             INNER JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                              AND tb5.CodigoTabla = 11
             INNER JOIN Imagenes i ON i.Id_Mascotas = rm.Id_Mascotas
                                      AND i.ImagenPrincipal = 1
             INNER JOIN Usuario u ON u.Id_Usuario = m.Id_Usuario
        WHERE m.Id_Mascotas = @Id_Mascotas;

        --- me trae las demas imagenes 
        SELECT NombreArchivo, 
               Foto
        FROM Imagenes
        WHERE Id_Mascotas = @Id_Mascotas
              AND ImagenPrincipal <> 1;

        ---- me trae las Red Social  
        SELECT TituloRedSocial, 
               RedSocial
        FROM Contacto c
             INNER JOIN ReportarMascota rm ON rm.Id_ReportarMascota = c.Id_ReportarMascota
        WHERE rm.Id_Mascotas = @Id_Mascotas;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_reporte_dias]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_reporte_dias]
@check bit = null
AS
    BEGIN
        --------------------------- REPORTE DE MASCOTAS CON DIAS PERDIDAS Y ENCONTRADAS ---------------------------
        WITH DatosMascotas
             AS (SELECT m.Id_Mascotas, 
                        m.Nombre,
                        -- reporta mascota
                        ISNULL(CONVERT(VARCHAR, CAST(rm.FechaPerdida AS DATE), 120), '') AS FechaPerdida, 
                        ISNULL(CONVERT(VARCHAR, CAST(ISNULL(rm.FechaEncontrado, GETDATE()) AS DATE), 120), '') AS FechaEncontrado, 
                        DATEDIFF(day, rm.FechaPerdida, ISNULL(rm.FechaEncontrado, GETDATE())) DifDias, 
                        ISNULL(tb6.DescripcionCorta, '') AS DesDistrito, 
                        ISNULL(tb7.DescripcionCorta, '') AS Estado 
                 --,COUNT(m.Id_Mascotas) as TotalMascotas
                 FROM [dbo].[Mascotas] m
                      INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
                      INNER JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                                       AND tb6.CodigoTabla = 11
                      INNER JOIN Tabla_Generica tb7 ON tb7.Valor1 = rm.CheckPerdida
                                                       AND tb7.CodigoTabla = 10
                 WHERE  m.Estado = 1 
                      AND (  ( isnull(@check, 0) = 0 and isnull(@check, 1) = 1 ) 
					  or @check =  rm.CheckPerdida ) -- encontrada y perdidas --parametro
 
        )
             SELECT Id_Mascotas, 
                    Nombre, 
                    FechaPerdida, 
                    FechaEncontrado, 
                    DifDias, 
                    DesDistrito, 
                    Estado
             FROM DatosMascotas
             --WHERE DifDias > 0
             ORDER BY DifDias desc;
    END;


GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_reporte_encontradas]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_reporte_encontradas]
@Anio int = null
AS
    BEGIN
        --------------------------- REPORTE DE DISTRITOS CON MASCOTAS ENCONTRADAS ---------------------------
        SELECT -- reporta mascota
        ISNULL(tb6.DescripcionCorta, '') AS DesDistrito, 
        ISNULL(tb7.DescripcionCorta, '') AS Estado, 
        COUNT(m.Id_Mascotas) AS TotalMascotas,
		YEAR(FechaEncontrado) Anio,
		ISNULL(tb6.Valor2, '') AS Color 
        FROM [dbo].[Mascotas] m
             INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
             INNER JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                              AND tb6.CodigoTabla = 11
             INNER JOIN Tabla_Generica tb7 ON tb7.Valor1 = rm.CheckPerdida
                                              AND tb7.CodigoTabla = 10
        WHERE rm.CheckPerdida = 1 -- se encuentra encontrada
              AND m.Estado = 1  
        AND (ISNULL(@Anio, 0) = 0
                       OR @Anio = YEAR(FechaEncontrado))
        GROUP BY tb6.DescripcionCorta, 
                 tb7.DescripcionCorta,
				 YEAR(FechaEncontrado),
				  tb6.Valor2;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_reporte_meses_E]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_reporte_meses_E] 
@Anio INT = NULL
AS
    BEGIN
        --------------------------- REPORTE DE MASCOTAS CON MESES ---------------------------

        WITH datosEncontrados
             AS (SELECT -- reporta mascota 
                 ISNULL(tb7.DescripcionCorta, '') AS Estado, 
                 COUNT(m.Id_Mascotas) AS TotalMascotas, 
                 MONTH(FechaEncontrado) AS Mes, 
                 YEAR(FechaEncontrado) AS Anio
                 FROM [dbo].[Mascotas] m
                      INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
                      INNER JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                                       AND tb6.CodigoTabla = 11
                      INNER JOIN Tabla_Generica tb7 ON tb7.Valor1 = rm.CheckPerdida
                                                       AND tb7.CodigoTabla = 10
                 WHERE rm.CheckPerdida IN(1) -- se encuentra encontrada
                      AND m.Estado = 1
                 GROUP BY tb7.DescripcionCorta, 
                          MONTH(FechaEncontrado), 
                          YEAR(FechaEncontrado))
             SELECT Estado, 
                    TotalMascotas,
                    CASE Mes
                        WHEN 1
                        THEN 'ENE'
                        WHEN 2
                        THEN 'FEB'
                        WHEN 3
                        THEN 'MAR'
                        WHEN 4
                        THEN 'ABR'
                        WHEN 5
                        THEN 'MAY'
                        WHEN 6
                        THEN 'JUN'
                        WHEN 7
                        THEN 'JUL'
                        WHEN 8
                        THEN 'AGO'
                        WHEN 9
                        THEN 'SET'
                        WHEN 10
                        THEN 'OCT'
                        WHEN 11
                        THEN 'NOV'
                        WHEN 12
                        THEN 'DIC'
                        ELSE ''
                    END AS Periodo, 
                    Anio
             FROM datosEncontrados
             WHERE Anio = @Anio;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_reporte_meses_P]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_reporte_meses_P] 
@Anio INT = NULL
AS
    BEGIN
        --------------------------- REPORTE DE MASCOTAS CON MESES ---------------------------

        WITH datosPerdidos
             AS (SELECT -- reporta mascota 
                 ISNULL(tb7.DescripcionCorta, '') AS Estado, 
                 COUNT(m.Id_Mascotas) AS TotalMascotas, 
                 MONTH(FechaPerdida) AS Mes, 
                 YEAR(FechaPerdida) AS Anio
                 FROM [dbo].[Mascotas] m
                      INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
                      INNER JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                                       AND tb6.CodigoTabla = 11
                      INNER JOIN Tabla_Generica tb7 ON tb7.Valor1 = rm.CheckPerdida
                                                       AND tb7.CodigoTabla = 10
                 WHERE rm.CheckPerdida IN(0) -- se encuentra encontrada
                      AND m.Estado = 1
                 GROUP BY tb7.DescripcionCorta, 
                          MONTH(FechaPerdida), 
                          YEAR(FechaPerdida))
             SELECT Estado, 
                    TotalMascotas,
                    CASE Mes
                        WHEN 1
                        THEN 'ENE'
                        WHEN 2
                        THEN 'FEB'
                        WHEN 3
                        THEN 'MAR'
                        WHEN 4
                        THEN 'ABR'
                        WHEN 5
                        THEN 'MAY'
                        WHEN 6
                        THEN 'JUN'
                        WHEN 7
                        THEN 'JUL'
                        WHEN 8
                        THEN 'AGO'
                        WHEN 9
                        THEN 'SET'
                        WHEN 10
                        THEN 'OCT'
                        WHEN 11
                        THEN 'NOV'
                        WHEN 12
                        THEN 'DIC'
                        ELSE ''
                    END AS Periodo, 
                    Anio
             FROM datosPerdidos
             WHERE Anio = @Anio;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_reporte_perdidas]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_reporte_perdidas]
@Anio int = null
AS
    BEGIN
        --------------------------- REPORTE DE DISTRITOS CON MASCOTAS PERDIDAS ---------------------------
        SELECT -- reporta mascota
        ISNULL(tb6.DescripcionCorta, '') AS DesDistrito, 
        ISNULL(tb7.DescripcionCorta, '') AS Estado, 
        COUNT(m.Id_Mascotas) AS TotalMascotas,
		YEAR(FechaPerdida) Anio,
		ISNULL(tb6.Valor2, '') AS Color 
        FROM [dbo].[Mascotas] m
             INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
             INNER JOIN Tabla_Generica tb6 ON tb6.Valor1 = rm.IdDistrito
                                              AND tb6.CodigoTabla = 11
             INNER JOIN Tabla_Generica tb7 ON tb7.Valor1 = rm.CheckPerdida
                                              AND tb7.CodigoTabla = 10
        WHERE rm.CheckPerdida = 0 -- se encuentra perdidas
              AND m.Estado = 1
        AND (ISNULL(@Anio, 0) = 0
                       OR @Anio = YEAR(FechaPerdida))
        GROUP BY tb6.DescripcionCorta, 
                 tb7.DescripcionCorta,
				 YEAR(FechaPerdida),
				 tb6.Valor2;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_obtener_reporte_totales]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_obtener_reporte_totales] 
AS
    BEGIN

        --------------------------- REPORTE DE TOTAL DE USUARIOS ---------------------------

        SELECT 'Total Usuario' Columna, 
               COUNT(Id_Usuario) AS Total
        FROM Usuario
        UNION ALL
        --------------------------- REPORTE DE TOTAL DE MASCOTAS REGISTRADAS ---------------------------

        SELECT 'Total Mascotas Registradas' Columna, 
               COUNT(m.Id_Mascotas) AS Total
        FROM [dbo].[Mascotas] m
        WHERE m.Estado = 1
        UNION ALL 
        --------------------------- REPORTE DE TOTAL DE MASCOTAS ENCONTRADAS ---------------------------

        SELECT 'Total Mascotas Encontradas' Columna, 
               (COUNT(m.Id_Mascotas) ) AS Total
        FROM [dbo].[Mascotas] m
             INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
        WHERE rm.CheckPerdida IN(1) -- se encuentra encontrada
             AND m.Estado = 1
        UNION ALL
        --------------------------- REPORTE DE TOTAL DE MASCOTAS PERDIDAS ---------------------------

        SELECT 'Total Mascotas Perdidas' Columna, 
               (COUNT(m.Id_Mascotas) ) AS Total
        FROM [dbo].[Mascotas] m
             INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas
        WHERE rm.CheckPerdida IN(0) -- se encuentra encontrada
             AND m.Estado = 1
			  --------------------------- REPORTE DE TOTAL DE MASCOTAS REPORTADAS ---------------------------
		UNION ALL
        SELECT 'Total Mascotas Reportadas' Columna, 
               COUNT(m.Id_Mascotas) AS Total
        FROM [dbo].[Mascotas] m 
		INNER JOIN ReportarMascota rm ON rm.Id_Mascotas = m.Id_Mascotas 
        WHERE m.Estado = 1
       
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_registrar_contacto_mascota]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_registrar_contacto_mascota] 
@Id_ReportarMascota INT, 
@IdRedSocial    INT, 
@RedSocial      VARCHAR(50)
AS
    BEGIN
        BEGIN TRY
            BEGIN TRANSACTION;
            INSERT INTO [dbo].[Contacto]
            ([Id_ReportarMascota], 
             [IdRedSocial], 
             [RedSocial]
            )
            VALUES
            (@Id_ReportarMascota, 
             @IdRedSocial, 
             @RedSocial
            );
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_registrar_contanto_mascota]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_registrar_contanto_mascota] 
@Id_ReportarMascota INT, 
@TituloRedSocial    VARCHAR(20), 
@RedSocial          VARCHAR(100)
AS
    BEGIN
        BEGIN TRY
            BEGIN TRANSACTION;
            INSERT INTO [dbo].[Contacto]
            ([Id_ReportarMascota], 
             [TituloRedSocial], 
             [RedSocial]
            )
            VALUES
            (@Id_ReportarMascota, 
             @TituloRedSocial, 
             @RedSocial
            );
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_registrar_credenciales]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_registrar_credenciales] 
@Id_Usuario          INT, 
@Contrasenia         VARCHAR(5), 
@ReContrasenia       VARCHAR(5), 
@IdPreguntaSeguridad INT, 
@RptaSeguridad       VARCHAR(100)
AS
    BEGIN
        BEGIN TRY
            BEGIN TRANSACTION;
            INSERT INTO [dbo].[Credenciales]
            ([Id_Usuario], 
             [Contrasenia], 
             [ReContrasenia], 
             [IdPreguntaSeguridad], 
             [RptaSeguridad]
            )
            VALUES
            (@Id_Usuario, 
             @Contrasenia, 
             @ReContrasenia, 
             @IdPreguntaSeguridad, 
             @RptaSeguridad
            );
             COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_registrar_imagenes_mascota]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_registrar_imagenes_mascota] 
@Id_Mascotas     INT, 
@NombreArchivo   VARCHAR(20), 
@Foto            VARCHAR(MAX), 
@ImagenPrincipal INT
AS
    BEGIN
        BEGIN TRY
            BEGIN TRANSACTION;
            INSERT INTO [dbo].[Imagenes]
            ([Id_Mascotas], 
             [NombreArchivo], 
             [Foto], 
             [ImagenPrincipal]
            )
            VALUES
            (@Id_Mascotas, 
             @NombreArchivo, 
             @Foto, 
             @ImagenPrincipal
            );
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_registrar_mascota]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_registrar_mascota] 
@Id_Usuario           INT, 
@DIP_Autogenerado     VARCHAR(20), 
@Nombre               VARCHAR(20), 
@IdGenero             INT, 
@IdColor              INT, 
@IdTamanio            INT, 
@IdRaza               INT, 
@IdCola               INT, 
@IdOrejas             INT, 
@Edad                 VARCHAR(2), 
@DescripcionAdicional VARCHAR(250), 
@Id_Mascotas          INT OUTPUT
AS
    BEGIN
        BEGIN TRY
            BEGIN TRANSACTION;
            ---- variables
            --         DECLARE @DIP_Autogenerado VARCHAR(20), @NumAleatorio VARCHAR(3);
            --         -- genera nummero aleatorio
            --SET @NumAleatorio = SUBSTRING(CAST(ABS(CHECKSUM(NEWID())) AS VARCHAR), 0, 4);
            --         SELECT TOP 1 @DIP_Autogenerado = CONCAT(NumDocumento, '-', @NumAleatorio)
            --         FROM Usuario
            --         WHERE Id_Usuario = @Id_Usuario;

            INSERT INTO [dbo].[Mascotas]
            ([Id_Usuario], 
             [DIP_Autogenerado], 
             [Nombre], 
             [IdGenero], 
             [IdColor], 
             [IdTamanio], 
             [IdRaza], 
             [IdCola], 
             [IdOrejas], 
             [Edad], 
             [DescripcionAdicional],
			 [Estado]
            )
            VALUES
            (@Id_Usuario, 
             @DIP_Autogenerado, 
             @Nombre, 
             @IdGenero, 
             @IdColor, 
             @IdTamanio, 
             @IdRaza, 
             @IdCola, 
             @IdOrejas, 
             @Edad, 
             @DescripcionAdicional,
			 1
            );
            SET @Id_Mascotas = SCOPE_IDENTITY();
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_registrar_reportar_mascota]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_registrar_reportar_mascota] 
@Id_Mascotas        INT, 
@CheckPerdida       BIT, 
@pFechaPerdida      VARCHAR(10), 
@pFechaEncontrado   VARCHAR(10), 
@Direccion          VARCHAR(50), 
@IdDistrito         INT, 
@DetPerdida			VARCHAR(250),
@Id_ReportarMascota INT OUTPUT
AS
    BEGIN
        DECLARE @FechaPerdida DATE = null, @FechaEncontrado DATE = null;
        SET @FechaPerdida = CONVERT(DATE, @pFechaPerdida, 120);
        IF(isnull(@pFechaEncontrado,'') != '')
            BEGIN
                SET @FechaEncontrado = CONVERT(DATE, @pFechaEncontrado, 120);
            END;
        BEGIN TRY
            BEGIN TRANSACTION;
            IF NOT EXISTS
            (
                SELECT 1
                FROM ReportarMascota
                WHERE Id_Mascotas = @Id_Mascotas
            )
                BEGIN
                    INSERT INTO [dbo].[ReportarMascota]
                    ([Id_Mascotas], 
                     [CheckPerdida], 
                     [FechaPerdida], 
                     [Direccion], 
                     [IdDistrito],
					 [DetPerdida],
					 [FechaEncontrado]
                    )
                    VALUES
                    (@Id_Mascotas, 
                     @CheckPerdida, 
                     @FechaPerdida, 
                     @Direccion, 
                     @IdDistrito,
					 @DetPerdida,
					 @FechaEncontrado
                    );
                    SET @Id_ReportarMascota = SCOPE_IDENTITY();
                END;
                ELSE
                BEGIN
                    UPDATE [dbo].[ReportarMascota]
                      SET 
                          CheckPerdida = @CheckPerdida, 
                          FechaPerdida = @FechaPerdida, 
                          Direccion = @Direccion, 
                          IdDistrito = @IdDistrito, 
                          FechaEncontrado = IIF(@CheckPerdida = 1, @FechaEncontrado, NULL),
						  DetPerdida = @DetPerdida
                    WHERE Id_Mascotas = @Id_Mascotas;

                    SELECT TOP 1 @Id_ReportarMascota = Id_ReportarMascota
                    FROM ReportarMascota
                    WHERE Id_Mascotas = @Id_Mascotas;
                END;
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_registrar_tabla_generica]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_registrar_tabla_generica]
@CodigoTabla      INT, 
@DescripcionCorta VARCHAR(100)
AS
    BEGIN
        DECLARE @Valor1 VARCHAR(50), @CodigoFila INT;

        SELECT @Valor1 = (MAX(CAST(Valor1 AS INT)) + 1), 
               @CodigoFila = (MAX(CodigoFila) + 1)
        FROM Tabla_Generica
        WHERE CodigoTabla = @CodigoTabla;

        BEGIN TRY
            BEGIN TRANSACTION;
            INSERT INTO [dbo].[Tabla_Generica]
            ([CodigoTabla], 
             CodigoFila, 
             [DescripcionCorta], 
             [Valor1], 
             [Estado]
            )
            VALUES
            (@CodigoTabla, 
             @CodigoFila, 
             @DescripcionCorta, 
             @Valor1, 
             1
            );
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
/****** Object:  StoredProcedure [dbo].[usp_registrar_usuario]    Script Date: 18/07/2022 16:56:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[usp_registrar_usuario] 
@IdTipoDocumento INT, 
@NumDocumento    VARCHAR(15), 
@Nombres         VARCHAR(20), 
@ApePaterno      VARCHAR(30), 
@ApeMaterno      VARCHAR(30), 
@Correo          VARCHAR(100), 
@Celular         INT, 
@TelefonoFijo    INT, 
@IdGenero        INT, 
@Id_Usuario      INT OUTPUT
AS
    BEGIN
        BEGIN TRY
            BEGIN TRANSACTION;
            INSERT INTO [dbo].[Usuario]
            ([IdTipoDocumento], 
             [NumDocumento], 
             [Nombres], 
             [ApePaterno], 
             [ApeMaterno], 
             [Correo], 
             [Celular], 
             [TelefonoFijo], 
             [IdGenero]
            )
            VALUES
            (@IdTipoDocumento, 
             @NumDocumento, 
             @Nombres, 
             @ApePaterno, 
             @ApeMaterno, 
             @Correo, 
             @Celular, 
             @TelefonoFijo, 
             @IdGenero
            );
            SET @Id_Usuario = SCOPE_IDENTITY();
            COMMIT TRANSACTION;
        END TRY
        BEGIN CATCH 
            -- Test if the transaction is uncommittable.  
            IF(XACT_STATE()) = -1
                BEGIN  
                    --PRINT  N'The transaction is in an uncommittable state.' +  
                    --		'Rolling back transaction.'  
                    ROLLBACK TRANSACTION;
                END;
            SELECT ERROR_NUMBER() AS ErrorNumber, 
                   ERROR_SEVERITY() AS ErrorSeverity, 
                   ERROR_STATE() AS ErrorState, 
                   ERROR_PROCEDURE() AS ErrorProcedure, 
                   ERROR_LINE() AS ErrorLine, 
                   ERROR_MESSAGE() AS ErrorMessage;
        END CATCH;
    END;
GO
