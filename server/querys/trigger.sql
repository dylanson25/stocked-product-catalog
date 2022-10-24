DELIMITER / / CREATE TRIGGER update_stock_product
AFTER
INSERT ON activity FOR EACH ROW BEGIN
DECLARE newStock TINYINT;
SET newStock = if(
        1 = NEW.type_activity,
        (
            SELECT (
                    SELECT stock
                    FROM product
                    WHERE id = NEW.product_id
                ) + NEW.unidades
        ),
        (
            SELECT (
                    SELECT stock
                    FROM product
                    WHERE id = NEW.product_id
                ) - NEW.unidades
        )
    );
UPDATE product
SET stock = newStock
WHERE id = NEW.product_id;
END / /