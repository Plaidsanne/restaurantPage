let home = document.createElement("button");
let menu = document.createElement("button");
let contact = document.createElement("button");
let div = document.createElement("div");
div.classList.add("buttonGroup");
div.append(home, menu, contact);

export default function App() {
  return div;
}
