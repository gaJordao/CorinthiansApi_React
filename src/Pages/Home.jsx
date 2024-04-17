import corinthiansLogo from "../assets/corinthians-logo.svg";
import estilos from "../static/Home.module.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from "../components/Card";

export function Home() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    const fetchJogadores = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/jogadores');
      setJogadores(response.data);
    };

    fetchJogadores();
  }, []);


  return (
    <>
      <div>
        <header className={estilos.header}>
          <img src={corinthiansLogo} alt="" />
          <ul className={estilos.listaHeader}>
            <li>
              <a href="#">Jogadores</a>
            </li>

            <li>
              <a href="#">Titulos</a>
            </li>

            <li>
              <a href="#">Cadastrar Jogadores</a>
            </li>
          </ul>
        </header>

        <div className={estilos.container}>
          <h1 className={estilos.containerTitulo}>Jogadores Cadastrados</h1>

          <div className={estilos.containerCards}>
            {jogadores.map((jogador) => (
              <Card
                id={jogador.id}
                nome={jogador.nome}
                apelido={jogador.apelido}
                posicao={jogador.posicao}
                atuando={jogador.atuando}
                pais={jogador.pais}
                numero={jogador.numero}
                foto={jogador.foto}
              />
            ))}
          </div>
          </div>
      </div>
    </>


  );
}
