import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'components/alert/index'
import OrderItem from 'components/orderItem/index';

function Index() {
    return (
        <div className="container" style={{ marginBottom: 100 }}>
            <Alert class="alert alert-success" text="Concluido" />

            <div class="card">
                <div class="card-header">
                    <b>#</b> 380
                    13/06/2020 13:45
                    <span className="float-right"><b>Pagamento:</b> cartão ****-1234</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Entrega em</h5>
                    <p class="card-text">R. Othon Maeder, 550 - Vila Yolanda - PR - Foz do Iguaçu/PR - PISO SUPERIOR</p>
                    <div>
                        <hr />
                        <OrderItem merchant="comerciante de sumos" date="13/06/2020 13:45" name="tang 3ml" description="para misturar com 1L de aguá" href="/cart" class="btn btn-primary" text="pedir novamente" />
                        <br />
                        <OrderItem merchant="comerciante de referscos" date="13/03/2020 13:45" name="coca cola 300ml" description="bem gelada" href="/cart" class="btn btn-primary" text="pedir novamente" />
                    </div>
                </div>

                <div class="card-footer text-muted">
                    <a href="/app/cart" class="btn btn-primary">Pedir todos os produtos novamente</a>
                    <span className="float-right"><b>Total:</b> R$ 1234,00</span>
                </div>
            </div>
        </div>
    );
}

export default Index;
