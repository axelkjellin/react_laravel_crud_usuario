import React, { Component} from "react";
import Main from '../templates/Main'
import axios from 'axios';

const headerProps = {
    icon: 'UserIcon',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir.'
}

const baseUrl = 'http://localhost:8000/users';

const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {
    state = {...initialState}

    clear() {
        this.setState = {user: initialState.user}
    }

    save(e) {
        e.preventDefault();
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState, list })
            })
        
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Nome</span>
                        <input 
                            name="name"
                            type="text" 
                            value={this.state.user.name} 
                            onChange={e => this.updateField(e)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">E-mail</span>
                        <input 
                            name="email"
                            type="text" 
                            value={this.state.user.email} 
                            onChange={e => this.updateField(e)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />
                    </label>
                    <div className="flex w-full justify-start mt-10 sm:flex-col">
                        <button 
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={e => this.save(e)}
                            >
                            Salvar
                        </button>
                        <button 
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow lg:ml-5 sm:mt-5"
                            onClick={e => this.clear(e)}
                            >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
    render() {
        return(
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}