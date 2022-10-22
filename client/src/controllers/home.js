import home from "../views/home.html";
export const Home = () => {
  const template = document.createElement("div");
  // template.classList = "text-white";
  template.innerHTML = home;
  return template;
};
