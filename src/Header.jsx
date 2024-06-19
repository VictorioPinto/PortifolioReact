import React, { useState, useEffect } from "react";
function Header() {
  const [svgContent, setSvgContent] = useState("");
  useEffect(() => {
    fetch("./assets/treisbarras.svg")
      .then((response) => response.text())
      .then((svgString) => setSvgContent(svgString));
  }, []);
  return (
    <>
      <div id="divhdbutton">
        <p id="hiddenbutton" onclick="myfuction()">
          <svg>{svgContent}</svg>
        </p>
      </div>
      <div id="divcima">
        <ul id="cima">
          <li class="alista">
            <a href="#nome">Home</a>
          </li>
          <li class="alista">
            <a href="#Sobremim"> Sobre Mim</a>
          </li>
          <li class="alista">
            <a href="#habilidades"> Habilidades</a>
          </li>
          <li class="alista">
            <a href="#educacao"> Educação</a>
          </li>
          <li class="alista">
            <a href="#backback"> Projetos</a>
          </li>
          <li class="alista">
            <a href="#contato"> Contato</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
