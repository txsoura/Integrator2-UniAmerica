import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from 'components/cartItem/index'
import Icon from 'components/icon/index'

function Home() {
    return (
        <div class="container">
            <div class="card shopping-cart">
                <div class="card-header bg-dark text-light">
                    <Icon icon="fa fa-shopping-cart" />
                Carrinho

                <div class="clearfix"></div>
                </div>
                <div class="card-body">
                    <CartItem />
                    <CartItem />
                </div>
                <div class="card-footer">
                    <div class="pull-left" style={{ margin: '10px' }}>
                        <div class="pull-left" style={{ margin: '5px' }}>
                            Taxa de entrega: <b>R$ 8,00</b>
                        </div>
                    </div>
                    <div class="pull-right" style={{ margin: '10px' }}>
                        <a href="/checkout" class="btn btn-success pull-right">Confirmar</a>
                        <div class="pull-right" style={{ margin: '5px' }}>
                            Total: <b>R$ 58.00</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
