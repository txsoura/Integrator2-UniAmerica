import React, { Component } from "react";
import Input from "components/input/index";
import 'bootstrap/dist/css/bootstrap.min.css';




export default class RecuperarSenha extends Component {
    render() {
        return (

            <Input
                type="passworld"
                name="Entrada"
                placeholder="Digite A Senha"
                label="Recuperar Senha"
                class="form-control" />

            

        );
    }
}
