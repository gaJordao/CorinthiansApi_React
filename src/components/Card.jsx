import estilos from '../static/Card.module.css'

export function Card({ id, nome, apelido, posicao, atuando, pais, numero, foto }) {
    const getSituacao = (atuando) => {
        return atuando ? "Atuando" : "Machucado";
    }

    return (
        <div className={estilos.card} id={id}>
            <img src={foto} alt={apelido} className={estilos.imagem} />
            <h1 className={estilos.apelido}>{apelido}</h1>
            <h4 className={estilos.detalhe}>Nome: {nome}</h4>
            <h4 className={estilos.detalhe}>Posição: {posicao}</h4>
            <h4 className={estilos.detalhe}>Situação: {getSituacao(atuando)}</h4>
            <h4 className={estilos.detalhe}>País: {pais}</h4>
            <h4 className={estilos.detalhe}>Número: {numero}</h4>
        </div>
    );
}