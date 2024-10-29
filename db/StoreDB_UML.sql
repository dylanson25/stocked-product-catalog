DROP DATABASE storeDB;
CREATE DATABASE storeDB;
use storeDB;
-- 01_add_table_category
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
    `id` TINYINT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(45) DEFAULT NULL,
    `deleted_by` DATETIME DEFAULT NULL,
    `updated_by` DATETIME DEFAULT NULL,
    `created_by` DATETIME DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` DATETIME DEFAULT NULL,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT `pk_category_id` PRIMARY KEY (`id`),
    CONSTRAINT `uq_category_name` UNIQUE (`name`)
);
-- 02_insert_category_data
LOCK TABLES `category` WRITE;
INSERT INTO `category` (`name`)
VALUES ('Abarrotes'),
    ('Dulceria'),
    ('Energeticos'),
    ('Vinos'),
    ('Preparados'),
    ('Agua');
UNLOCK TABLES;
-- 03_add_table_product
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
    `id` TINYINT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(45) DEFAULT NULL,
    `stock` int DEFAULT NULL,
    `description` VARCHAR(200) DEFAULT NULL,
    `sales_price` DECIMAL DEFAULT NULL,
    `image` VARCHAR(254) DEFAULT NULL,
    `category_id` TINYINT NOT NULL,
    `deleted_by` DATETIME DEFAULT NULL,
    `updated_by` DATETIME DEFAULT NULL,
    `created_by` DATETIME DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` DATETIME DEFAULT NULL,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT `fk_category_id` FOREIGN KEY(`category_id`) REFERENCES category(`id`),
    CONSTRAINT `pk_product_id` PRIMARY KEY (`id`),
    CONSTRAINT `ck_product_sales_price_greather_than_zero` CHECK (`sales_price` > 0)
);
-- 04_insert_product_data
LOCK TABLES `product` WRITE;
INSERT INTO `product` (
        `name`,
        `sales_price`,
        `stock`,
        `category_id`,
        `description`
    )
VALUES (
        'Atun',
        12,
        20,
        1,
        'Lata de atun en aceite con omega 3 reforzado'
    ),
    (
        'Frijoles',
        18,
        7,
        1,
        'Frijol negro organico de zacualpan tamaulipas'
    ),
    (
        'Caramelo de cajeta',
        4,
        25,
        2,
        'Dulce de leche de vaca, con colorante artificial'
    ),
    (
        'Clorets menta',
        1,
        120,
        2,
        'Chicle sabor menta con 2pz'
    ),
    (
        'Monster toronja',
        50,
        6,
        3,
        'Bebida energetica monster con colorante naranja sabor toronja'
    ),
    (
        'Vive 100',
        12,
        8,
        3,
        'Bebida energetica sin cafe sabor a frutos rojo'
    ),
    (
        'Centenario plata',
        299,
        3,
        4,
        'Bebida alcholica con 2.1% de alchol'
    ),
    (
        'Rancho escondido',
        90,
        2,
        4,
        'Tequila de jalisco'
    ),
    (
        'Sky',
        18,
        20,
        5,
        'Preparado de vodka con variedad de sabores'
    ),
    (
        'Caribe Cooler',
        20,
        20,
        5,
        'Preparado de vodka con diferentes sabores'
    ),
    (
        'Ciel',
        12,
        20,
        6,
        'Agua purificada libre de impurezas'
    ),
    (
        'Santorini',
        12,
        20,
        6,
        'Agua purificada libre de impurezas'
    );
UNLOCK TABLES;
-- 05_add_table_provider
DROP TABLE IF EXISTS `provider`;
CREATE TABLE `provider` (
    `id` TINYINT AUTO_INCREMENT NOT NULL,
    `email` VARCHAR(45) DEFAULT NULL,
    `full_name` VARCHAR(50) DEFAULT NULL,
    `phone_number_agent` VARCHAR(10) DEFAULT NULL,
    `agent` VARCHAR(40) DEFAULT NULL,
    `deleted_by` DATETIME DEFAULT NULL,
    `updated_by` DATETIME DEFAULT NULL,
    `created_by` DATETIME DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` DATETIME DEFAULT NULL,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT `pk_provider_id` PRIMARY KEY (`id`),
    CONSTRAINT `ck_provider_email_lower_Case` CHECK (`email` = lower(`email`))
);
-- 06_insert_provider_data
LOCK TABLES `provider` WRITE;
INSERT INTO `provider` (
        `email`,
        `full_name`,
        `phone_number_agent`,
        `agent`
    )
VALUES (
        'example2@gmail.com',
        'Dylan Ivan Villarreal Toscano',
        '3121319198',
        'Ernesto Martines Espinosa'
    ),
    (
        'example@gmail.com',
        'Ian Carlo Moreno',
        '3145687541',
        'Raul Lopes Amescua'
    ),
    (
        'juan_perez@gmail.com',
        'Juan Antonio Perez',
        '3122564719',
        'Alegandro Del poso Vaca'
    );
UNLOCK TABLES;
-- 08_add_table_shoping order
DROP TABLE IF EXISTS `shopping_order`;
CREATE TABLE `shopping_order` (
    `id` TINYINT AUTO_INCREMENT NOT NULL,
    `confirmed` SMALLINT DEFAULT NULL,
    `date_delivery` date DEFAULT NULL,
    `total_cost` decimal DEFAULT NULL,
    `provider_id` TINYINT null,
    `deleted_by` DATETIME DEFAULT NULL,
    `updated_by` DATETIME DEFAULT NULL,
    `created_by` DATETIME DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` DATETIME DEFAULT NULL,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT `pk_shopping_order_id` PRIMARY KEY (`id`),
    CONSTRAINT `fk_provider_id` FOREIGN KEY(`provider_id`) REFERENCES provider(`id`)
);
-- 09_insert_shopping_order_data;
LOCK TABLES `shopping_order` WRITE;
INSERT INTO `shopping_order` (
        `confirmed`,
        `date_delivery`,
        `total_cost`,
        `provider_id`
    )
VALUES (
        1,
        '2022-06-18',
        173,
        1
    ),
    (
        1,
        '2022-10-08',
        896,
        2
    ),
    (
        0,
        '2022-05-01',
        100,
        3
    ),
    (
        1,
        '2022-05-18',
        377.2,
        1
    );
UNLOCK TABLES;
-- 10_add_table_order_details
DROP TABLE IF EXISTS `product_shopping_order`;
CREATE TABLE `product_shopping_order` (
    `id` TINYINT AUTO_INCREMENT NOT NULL,
    `amount` int DEFAULT NULL,
    `cost_per_unit` float DEFAULT NULL,
    `shopping_order_id` TINYINT null,
    `product_id` TINYINT null,
    `deleted_by` DATETIME DEFAULT NULL,
    `updated_by` DATETIME DEFAULT NULL,
    `created_by` DATETIME DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` DATETIME DEFAULT NULL,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT `fk_shopping_order_id` FOREIGN KEY(`shopping_order_id`) REFERENCES shopping_order(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_product_id` FOREIGN KEY(`product_id`) REFERENCES product(`id`),
    CONSTRAINT `uq_shopping_order_id_and_product_id_unique` UNIQUE (`product_id`, `shopping_order_id`),
    CONSTRAINT `pk_product_shopping_order_id` PRIMARY KEY (`id`)
);
-- 11_insert_product_shopping_order_data
LOCK TABLES `product_shopping_order` WRITE;
INSERT INTO `product_shopping_order` (
        `amount`,
        `cost_per_unit`,
        `shopping_order_id`,
        `product_id`
    )
VALUES (10, 9.5, 1, 1),
    (5, 15.6, 1, 2),
    (6, 16.4, 2, 9),
    (6, 18.7, 2, 10),
    (4, 167.9, 2, 8),
    (80, 0.60, 3, 4),
    (20, 2.6, 3, 3),
    (24, 8.6, 4, 5),
    (4, 42.7, 4, 6);
UNLOCK TABLES;