import App from "./App/index.js";
import "../src/App/app.css";

function component() {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  element.appendChild(App());
  return element;
}
document.body.appendChild(component());
