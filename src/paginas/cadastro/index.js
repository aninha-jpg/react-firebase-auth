import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase";
import "./style.css";

class Cadastro extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            email: "",
            dn: "",
            senha: ""
        }
        this.gravar = this.gravar.bind(this);
    }

    async gravar() {

    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
        alert("Digite um e-mail válido.");
    return;
    }   

    if (this.state.senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
    return;
    }

        //não salva a senha no firestore e sim deixa a responsabilidade para o authentication.
    try {
        const resultado = await createUserWithEmailAndPassword(
            auth,
            this.state.email,
            this.state.senha
        );

        await addDoc(collection(db, "usuarios"), {
            uid: resultado.user.uid,
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            email: this.state.email,
            dn: this.state.dn
        });

        alert("Usuário cadastrado com sucesso!");

        this.props.navigate("/");
    } catch (error) {

        console.log("ERRO COMPLETO:", error);
        console.log("CÓDIGO:", error.code);
        console.log("MENSAGEM:", error.message);


        if (error.code === "auth/email-already-in-use") {

            alert("Este e-mail já está cadastrado.");

        } else {

            alert("Erro ao cadastrar usuário.");

        }
    }
}


    render() {
        return (
            <div className="cadastro-page">

                <div className="cadastro-card">

                    <h1>Crie sua conta ✨</h1>

                    <p className="cadastro-subtitle">
                        Preencha seus dados para se cadastrar
                    </p>

                    <input
                        type="text"
                        placeholder="Nome"
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Sobrenome"
                        value={this.state.sobrenome}
                        onChange={(e) => this.setState({ sobrenome: e.target.value })}
                        required
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        required
                    />

                    <input
                        type="date"
                        value={this.state.dn}
                        onChange={(e) => this.setState({ dn: e.target.value })}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        minLength="8"
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                        required
                    />

                    <button onClick={this.gravar}>
                        Criar conta
                    </button>

                </div>

            </div>
        );
    }

}

function CadastroComNavegacao() {

    const navigate = useNavigate();

    return <Cadastro navigate={navigate} />;

}

export default CadastroComNavegacao;