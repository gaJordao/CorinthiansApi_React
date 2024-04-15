import axios from 'axios';
import { useState } from 'react';

export function Card(){
    const [nome, getNome] = useState('')
    const [apelido, getApelido] = useState('')
    const [posicao, getPosicao] = useState('')
    const [atuando, getAtuando] = useState(true)
    const [pais, getPais] = useState('')
    const [numero, getNumero] = useState('')

    axios.get('http://127.0.0.1:8000/api/v1/jogadores/1')
        .then((response) => {
            getNome(response.data.nome)
            getApelido(response.data.apelido)
            getPosicao(response.data.posicao)
        })

    return(
        <>
            <div>
                <img src="" alt="" />
                <h4>{nome}</h4>
            </div>
        </>
    )
}