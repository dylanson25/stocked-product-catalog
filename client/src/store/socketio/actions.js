export const signOrCreateUser = ({ state }, user) => {
  state.io.emit("signOrCreateUser", user);
};

export const get_products = ({ state }) => {
  state.io.emit("get_products");
};
export const edit_product = ({ state }, product) => {
  state.io.emit("edit_product", product);
};
export const newEntryOut = ({ state }, movimiento) => {
  state.io.emit("newEntryOut", movimiento);
};

export const add_new_product = ({ state }, movimiento) => {
  state.io.emit("add_new_product", movimiento);
};
