import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'assets/img/logo.png';
import Button from 'components/button/index';
import { isAuthenticated } from "auth";

export default function Index() {
    const auth = isAuthenticated();
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed-top">
            <h5 className="my-0 mr-md-auto font-weight-normal">G<img src={logo} height="33px" width="33px" alt="" />ole</h5>


            {auth ?
                <nav className="my-2 my-md-0 mr-md-3">
                    <Button class="p-2 text-dark" href="/app/products" text="Produtos" />
                    <Button class="p-2 text-dark" href="/app" text="Promoções" />
                    <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Perfil
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu">
                        <button class="dropdown-item" href="/app/profile" text="Minha conta" />
                        <button class="dropdown-item" href="/app/cart" text="Carrinho" />
                        <button class="dropdown-item" href="/app/orders" text="Pedidos" />
                        <div className="dropdown-divider"></div>
                        <button class="dropdown-item" href="/auth/logout" text="Sair" />
                    </div>
                </nav>
                :
                <Button class="btn btn-outline-primary" href="/auth/login" text="Entrar" />
            }



        </div>
    );
}
