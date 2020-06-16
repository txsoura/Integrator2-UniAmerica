import React, { Component } from "react";
import Input from "components/input/index";
import Button from "components/button/index";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Index extends Component {
    render() {
        return (
            <div class="container">
                <h3>Gole Entragadores</h3>
                <form>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSOi74G3zgwReRIoE5ShtXxHIH4ooA15C_dm_iMhd7sLcRB70t&usqp=CAU" height="100" width="100" alt="" />

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
                    <h3>__________ou___________</h3>
                    <button name="ENTRAR COM CELULAR" />
                </form>

            </div>

        );
    }
}
