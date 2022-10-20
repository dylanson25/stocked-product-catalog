-- este es un ejemplo del sql falta modificarlo con lo que pide el maestro
use storeDB;
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` TINYINT(50) AUTO_INCREMENT NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `sales_price` decimal DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  CONSTRAINT `pk_product_id` PRIMARY KEY (`id`),
  CONSTRAINT `ck_product_sales_price_greather_than_zero` CHECK (`sales_price` > 0)
);

LOCK TABLES `product` WRITE;

INSERT INTO `product` (
	`name`,
    `sales_price`,
    `created_at`,
    `description`,
    `image`
  ) 
VALUES (
    'Atun',
    12,
    "2022-06-28",
    "Lata de atun en aceite con omega 3 reforzado",
    "https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/1/4/149873_image.jpg"
  ),
  (
    'Frijoles',
    18,
    "2022-06-28",
    "Frijol negro organico de zacualpan tamaulipas",
    "https://www.maricruzavalos.com/wp-content/uploads/2019/09/frijoles_de_la_olla.jpg"
  );
