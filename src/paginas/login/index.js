import React, { Component } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            senha: "",
            mensagem: ""
        };

        this.login = this.login.bind(this);
    }

    async login() {

        if (!this.state.email || !this.state.senha) {
            this.setState({
                mensagem: "Preencha o e-mail e a senha."
            });
            return;
        }

        try {

            await signInWithEmailAndPassword(
                auth,
                this.state.email,
                this.state.senha
            );

            this.props.navigate("/home");

        } catch (error) {

            this.setState({
                mensagem: "Usuário não cadastrado ou senha incorreta."
            });

        }
    }

    render() {

        return (
            <div className="login-page">

                <div className="login-card">

                    <h1>Bem-vindo! 👋</h1>

                    <p className="login-subtitle">
                        Entre na sua conta
                    </p>

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        } required
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={this.state.senha}
                        onChange={(e) =>
                            this.setState({ senha: e.target.value })
                        } required
                    />

                    <button onClick={this.login}>
                        Entrar
                    </button>

                    <p className="cadastro-texto">
                        Não possui uma conta?{" "}
                        <Link to="/cadastro">Cadastre-se</Link>
                    </p>

                    {this.state.mensagem && (
                        <p className="mensagem">
                            {this.state.mensagem}
                        </p>
                    )}

                </div>

            </div>
        );
    }
}

function LoginComNavegacao() {

    const navigate = useNavigate();

    return <Login navigate={navigate} />;

}

export default LoginComNavegacao;