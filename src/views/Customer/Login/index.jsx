import React, { Component } from "react";
import Input from "components/input/index";
import Button from "components/button/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "components/icon/index";
import "./index.css";





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
                <div className="auth-wrapper group-mb-8">
                    <div className="auth-inner">
                        <form>
                            <h3>Seja bem-vindo</h3>

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
                            <Button name="ENTRAR" />
                            <p className="forgot-password text-right">
                                Esqueceste-te a <a href="https://www.google.com/">Senha?</a>
                            </p>
                        </form>
                    </div>
                </div>
                <Icon
                    class="fa fa-facebook-f"

                />
                <Icon
                    class="fa fa-twitter"
                />
                <Icon
                    class="fa fa-google-plus-g"
                />
            </div>

        );
    }
}
