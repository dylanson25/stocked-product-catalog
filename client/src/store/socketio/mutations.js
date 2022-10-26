// mutaciones, seran ejecutadas por Node.js y deben de comenzar por SOCKET_
export const setSocket = (state, socket) => {
  state.io = socket;
};
export const SOCKET_LOGIN = (state, data) => {
  console.log("SOCKET_LOGIN");
};
