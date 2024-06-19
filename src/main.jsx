import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header.jsx";
import Nome from "./Nome.jsx";
import Sobremim from "./Sobremim.jsx";
import Maineducacao from "./educacao/Maineducacao.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Nome />
    <Sobremim />
    <Maineducacao />
  </React.StrictMode>
);
