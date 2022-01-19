import React from "react";
import Main from '../templates/Main'

const Home = (props) =>  {
        return (
            <Main icon="home" title="Inicío" subtitle="Segundo projeto capitulo react">
                <div className="text-3xl">Bem Vindo!</div>
                <hr />
                <p>Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
            </Main>
        )
}

export default Home