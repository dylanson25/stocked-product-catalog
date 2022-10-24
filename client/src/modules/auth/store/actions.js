export const signOrCreateUser = async ({ commit }, user) => {
  console.log("Crear usario");
  try {
    commit("loginUser", user);
  } catch (error) {
    console.log(error);
  }
};
