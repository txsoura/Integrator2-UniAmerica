import React, { Component } from "react";
import Input from "components/input/index";
import Button from "components/button/index";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Index extends Component {
    render() {
        return (
            <div class="container">
                <h3>Gole Entragadores</h3>

                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <img src="https://static.vecteezy.com/system/resources/previews/000/425/737/non_2x/delivery-man-with-box-postman-design-isolated-on-white-background-courier-in-hat-and-uniform-with-package-vector.jpg" height="340" width="340" alt="" /><br /><br />

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
                            <Button class="btn btn-success btn-lg" href="/app/product" text="Entrar />

                            <h3>            ou                  </h3>
                            <Button class="btn btn-success text="Entrar Com Celular" />
                        </form>

                    </div>
                </div>
            </div >

        );
    }
}
