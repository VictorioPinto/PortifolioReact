import Curso from "./Curso";
import Primeiroano from "./Primeiroano";
import Segundoano from "./Segundoano";
function Maineducacao() {
  return (
    <>
      <div id="educacao">
        <h1 class="titulo">Educação</h1>
        <div class="ahistoria">
          <div class="listas2" id="esquerda">
            <Primeiroano />
            <Segundoano />
          </div>
          <div class="listas2">
            <Curso />
          </div>a
        </div>
      </div>
    </>
  );
}
export default Maineducacao;
