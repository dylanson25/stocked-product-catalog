import { Home, Login } from "../controllers";
const root = document.getElementById("root");

const router = (route) => {
  console.log(route);
  root.innerHTML = "";
  switch (route) {
    case "#/":
      {
        root.appendChild(Home());
      }
      break;

    case "#/login":
      {
        root.appendChild(Login());
      }
      break;
    default:
      return console.log("404");
  }
};
export default router;
