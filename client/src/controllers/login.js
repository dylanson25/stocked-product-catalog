import login from "../views/Login.html";
export const Login = () => {
  const template = document.createElement("div");
  // template.classList = "";
  template.innerHTML = login;
  return template;
};
