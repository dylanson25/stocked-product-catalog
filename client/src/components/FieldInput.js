import "../css/componentes.css";

export const saludar = () => {
  console.log("Creando etiqueta h1");

  const h1 = document.createElement("h1");
  h1.innerText = `Configuración inicial del webpack`;

  document.body.append(h1);
};
