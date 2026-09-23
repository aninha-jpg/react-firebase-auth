import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../Firebase";
import React, { Component } from 'react';
import "./style.css";


class Home extends Component {
    // inicializa o state da home
    constructor(props) {
            super(props);

            this.state = {
                nome: "",
                sobrenome: "",
                dn: "",
                carregando: true
            };
        }


    // metodo procura nos usuarios o uid igual ao user que fez login
    componentDidMount() {

    onAuthStateChanged(auth, async (user) => {

        if (!user) {

            window.location.href = "/";
            return;

        }

        const consulta = query(
            collection(db, "usuarios"),
            where("uid", "==", user.uid)
        );

        const resultado = await getDocs(consulta);

        resultado.forEach((documento) => {

            const dados = documento.data();

            this.setState({
                nome: dados.nome,
                sobrenome: dados.sobrenome,
                dn: dados.dn,
                carregando: false
            });

        });

    });

}

    render() {

        if (this.state.carregando) {
            return (
                <div className="home-page">
                    <div className="home-card">
                        <p>Carregando...</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="home-page">

                <div className="home-card">

                    <h1>Bem-vindo! 👋</h1>

                    <p className="home-subtitle">
                        Seus dados
                    </p>

                    <div className="dado">
                        <span>Nome</span>
                        <strong>{this.state.nome}</strong>
                    </div>

                    <div className="dado">
                        <span>Sobrenome</span>
                        <strong>{this.state.sobrenome}</strong>
                    </div>

                    <div className="dado">
                        <span>Data de nascimento</span>
                        <strong>{this.state.dn}</strong>
                    </div>

                </div>

            </div>
        );
    }
}


export default Home;