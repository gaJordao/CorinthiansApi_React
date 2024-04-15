import corinthiansLogo from "../assets/corinthians-logo.svg";
import estilos from "../static/Home.module.css";
import { Card } from "../components/Card";

export function Home() {

  return (
    <>
      <div>
        <header className={estilos.header}>
          <img src={corinthiansLogo} alt="" />
          <ul className={estilos.listaHeader}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Jogadores</a>
            </li>
            <li>
              <a href="#">Títulos</a>
            </li>
            <li>
              <a href="#">Jogos</a>
            </li>
          </ul>
        </header>

        <div>
          <h1>Jogadores Cadastrados</h1>
            <Card />
        </div>

      </div>
    </>
  );
}
