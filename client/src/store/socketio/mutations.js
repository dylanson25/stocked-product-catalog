// mutaciones, seran ejecutadas por Node.js y deben de comenzar por SOCKET_
export const setSocket = (state, socket) => {
  state.io = socket;
};
export const SOCKET_LOGIN = (state) => {
  console.log("SOCKET_LOGIN");
  state.status = "authenticated";
};

export const SOCKET_BAD_CREDENCIAL = (state) => {
  console.log("SOCKET_LOGIN");
  state.status = "not-authenticated";
};
export const SOCKET_GET_PRODUCTS = (state, products) => {
  state.products = products;
};
