import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'assets/img/logo.png';
import Button from 'components/button/index';

export default function Index() {

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">G<img src={logo} height="33px" width="33px" alt="" />ole</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Button class="p-2 text-dark" href="/products" text="Produtos" />
                <Button class="p-2 text-dark" href="/home" text="Promoções" />
                <a className="p-2 text-dark dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Perfil
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Button class="dropdown-item" href="/profile" text="Minha conta" />
                        <Button class="dropdown-item" href="/cart" text="Carrinho" />
                        <Button class="dropdown-item" href="/orders" text="Pedidos" />
                        <div className="dropdown-divider"></div>
                        <Button class="dropdown-item" href="/auth/logout" text="Sair" />
                    </div>
                </a>
            </nav>
            <Button class="btn btn-outline-primary" href="/auth/login" text="Entrar" />
        </div>
    );
}
