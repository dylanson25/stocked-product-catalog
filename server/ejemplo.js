/**Agregar persona */
InsertNewUser(connection, {
  full_name: "dvillarreal0@ucol.mx",
  password: "123456789",
});
/**Agregar producto */
InsertNewProduct(connection, {
  nombre: "Cafe Andati",
  sale_price: 12,
  purchase_price: 10,
  stock: 5,
  concepto: "Cafe andati de 200 gramos extraido del bosque de tangamandapio",
  barcode: "0021254874145",
});
/**Entradas y salidad */
InsertNewActivity(connection, {
  product_id: 4,
  type_activity: 0,
  unidades: 5,
});

/**read product */
readProduct(connection);
readUser(connection, "dvillarreal0@ucol.mx");
/**update product */
updateProduct(connection, {
  nombre: "Clrets de menta",
  sale_price: 2,
  purchase_price: 1.5,
  stock: 45,
  concepto: "Modificado en el server",
  barcode: "0012354125214",
  id: 4,
});
