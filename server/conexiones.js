import mysql2 from "mysql2";

export const InsertNewUser = (
  connection,
  data,
  callback = (result) => {
    console.log(result);
  }
) => {
  let { full_name, password } = data;
  let InsertNewUserQuery =
    "INSERT INTO user (full_name, password) VALUES (?, ?)";
  let query = mysql2.format(InsertNewUserQuery, [full_name, password]);

  connection.query(query, function (err, result) {
    if (err) {
      console.log(err);
      throw err;
    }
    callback(result);
  });
};

export const InsertNewProduct = (
  connection,
  data,
  callback = (result) => {
    console.log(result);
  }
) => {
  let { nombre, sale_price, purchase_price, stock, concepto, barcode } = data;
  let InsertNewProductQuery =
    "INSERT INTO product (nombre, sale_price, purchase_price, stock, concepto, barcode) VALUES ( ?, ?, ?, ?, ?, ?)";
  let query = mysql2.format(InsertNewProductQuery, [
    nombre,
    sale_price,
    purchase_price,
    stock,
    concepto,
    barcode,
  ]);

  connection.query(query, function (err, result) {
    if (err) {
      console.log(err);
      throw err;
    }
    callback(result);
  });
};

export const InsertNewActivity = (
  connection,
  data,
  callback = (result) => {
    console.log(result);
  }
) => {
  let { product_id, type_activity, unidades } = data;
  let InsertNewActivityQuery =
    "INSERT INTO activity (product_id, type_activity, unidades) VALUES (?, ?, ?)";
  let query = mysql2.format(InsertNewActivityQuery, [
    product_id,
    type_activity,
    unidades,
  ]);

  connection.query(query, function (err, result) {
    if (err) {
      console.log(err);
      throw err;
    }
    callback(result);
  });
};
