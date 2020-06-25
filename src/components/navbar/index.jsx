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
                    <Button className="p-2 text-dark" href="/app/products" text="Produtos" />
                    <Button className="p-2 text-dark" href="/app" text="Promoções" />
                    <Button className="p-2 text-dark" href="/app/profile" text="Perfil" />
                    <Button className="p-2 text-dark" href="/app/cart" text="Carrinho" />
                    <Button className="p-2 text-dark" href="/app/orders" text="Pedidos" />
                    {/* <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Perfil
                    </button> */}
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                        <button className="dropdown-item" href="/app/profile" text="Minha conta" />
                        <button className="dropdown-item" href="/app/cart" text="Carrinho" />
                        <button className="dropdown-item" href="/app/orders" text="Pedidos" />
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" href="/auth/logout" text="Sair" />
                    </div> */}
                </nav>
                :
                <Button className="btn btn-outline-primary" href="/auth/login" text="Entrar" />
            }



        </div>
    );
}
