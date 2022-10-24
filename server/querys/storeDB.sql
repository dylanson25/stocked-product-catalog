DROP DATABASE storeDB;
CREATE DATABASE storeDB;
use storeDB;
-- Tabla de producto
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` TINYINT(50) AUTO_INCREMENT NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `sale_price` decimal DEFAULT NULL,
  `purchase_price` decimal DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `concepto` varchar(200) DEFAULT NULL,
  `barcode` varchar(13) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `pk_product_id` PRIMARY KEY (`id`),
  CONSTRAINT `ck_product_sales_price_greather_than_zero` CHECK (`sales_price` > 0),
  CONSTRAINT `ck_product_purchase_price_greather_than_zero` CHECK (`purchase_price` > 0)
);
LOCK TABLES `product` WRITE;
INSERT INTO `product` (
    `nombre`,
    `sale_price`,
    `purchase_price`,
    `stock`,
    `concepto`,
    `barcode`
  )
VALUES (
    'Atun',
    12,
    10,
    20,
    "Lata de atun en aceite con omega 3 reforzado",
    "0024695713846"
  ),
  (
    'Frijoles',
    18,
    15,
    7,
    "Frijol negro organico de zacualpan tamaulipas",
    "0024695713846"
  ),
  (
    'Caramelo de cajeta',
    4,
    2,
    25,
    "Dulce de leche de vaca, con colorante artificial",
    "0024695713846"
  ),
  (
    'Clorets menta',
    1,
    0.5,
    120,
    "Chicle sabor menta con 2pz",
    "0024695713846"
  ),
  (
    'Monster toronja',
    50,
    23,
    25,
    "Bebida energetica monster con colorante naranja sabor toronja",
    "0024695713846"
  ),
  (
    'Vive 100',
    12,
    11,
    8,
    "Bebida energetica sin cafe sabor a frutos rojo",
    "0024695713846"
  ),
  (
    'Centenario plata',
    299,
    250,
    3,
    "Bebida alcholica con 2.1% de alchol",
    "0024695713846"
  ),
  (
    'Rancho escondido',
    90,
    80,
    2,
    "Tequila de jalisco",
    "0024695713846"
  ),
  (
    'Sky',
    18,
    17,
    20,
    "Preparado de vodka con variedad de sabores",
    "0024695713846"
  ),
  (
    'Caribe Cooler',
    20,
    18,
    20,
    "Preparado de vodka con diferentes sabores",
    "0024695713846"
  ),
  (
    'Ciel',
    12,
    11,
    20,
    "Agua purificada libre de impurezas",
    "0024695713846"
  ),
  (
    'Santorini',
    12,
    10,
    20,
    "Agua purificada libre de impurezas",
    "0024695713846"
  );
UNLOCK TABLES;
-- Tabla actividad de producto
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `id` TINYINT(50) AUTO_INCREMENT NOT NULL,
  `product_id` TINYINT(50) NOT NULL,
  `type_activity` TINYINT(2) DEFAULT NULL,
  `unidades` INT DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `fk_product_id` FOREIGN KEY(`product_id`) REFERENCES product(`id`),
  CONSTRAINT `pk_product_id` PRIMARY KEY (`id`)
);
-- Tabla persona
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`(
  `id` TINYINT(50) AUTO_INCREMENT NOT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `pk_product_id` PRIMARY KEY (`id`)
);
LOCK TABLES `user` WRITE;
INSERT INTO `user` (`full_name`, `password`)
VALUES ("Dylan Toscano", "123456789"),
  ("Juan Perez", "123456789");
UNLOCK TABLES;