import React, { Component } from "react";
import Input from "components/input/index";
import Button from "components/button/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"



export default class Index extends Component {
    render() {
        return (
            <div className="app">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>CRIAR CONTA</h3>
                            <Input
                                type="email"
                                name="Entrada"
                                placeholder="Digite O E-mail"
                                label="E-MAIL"
                                class="form-control"
                            />
                            <Input
                                type="passworld"
                                name="Entrada"
                                placeholder="Digite A Senha"
                                label="Palavra Passe"
                                class="form-control"
                            />
                            <Input
                                type="text"
                                name="Entrada"
                                placeholder="Digite O CPF"
                                label="CPF"
                                class="form-control"
                            />
                            <Button name="CRIAR CONTA" />
                            <p className="forgot-password text-right">
                                <a href="https://www.google.com/">Iniciar?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
