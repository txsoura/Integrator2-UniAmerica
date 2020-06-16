import React, { Component } from "react";
import Input from "components/input/index";
import Button from "components/button/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../app.css";
import Icon from "components/icon/index";





export default class Login extends Component {
  render() {
    return (
      <div className="app">
        <div className="auth-wrapper">
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
                Esqueceu <a href="https://www.google.com/">Senha?</a>
              </p>
              <Icon
                class="fab-fa-facebook-f"
      
              />
              <Icon
              class="a-twitter"
              />
              <Icon
              class="fab fa-google-plus-g"
              />
            </form>
          </div>
        </div>
      </div>

    );
  }
}

