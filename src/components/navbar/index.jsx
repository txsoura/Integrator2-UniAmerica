import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'assets/img/logo.png';

export default function Index() {

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">G<img src={logo} height="33px" width="33px" alt="" />ole</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="/products">Produtos</a>
                <a className="p-2 text-dark" href="/home">Promoções</a>
                <a className="p-2 text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Perfil
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/profile">Minha conta</a>
                        <a className="dropdown-item" href="/cart">Carrinho</a>
                        <a className="dropdown-item" href="/orders">Pedidos</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/auth/logout">Sair</a>
                    </div>
                </a>
            </nav>
            <a className="btn btn-outline-primary" href="/auth/login">Entrar</a>
        </div>
    );
}
