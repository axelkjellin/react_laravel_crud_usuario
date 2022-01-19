import React, { Component} from "react";
import Main from '../templates/Main'

const headerProps = {
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir.'
}

export default class UserCrud extends Component {

    render() {
        return(
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}