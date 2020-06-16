import React from 'react';
import 'views/Customer/Profile/node_modules/bootstrap/dist/css/bootstrap.min.css';
import OrderItem from 'components/orderItem/index';

function Index() {
    return (
        <div className="container">
            <OrderItem merchant="comerciante de sumos" date="13/06/2020 13:45" name="tang 3ml" description="para misturar com 1L de aguá" href="/app/order" class="btn btn-primary" text="pedir novamente" />
            <br />
            <OrderItem merchant="comerciante de referscos" date="13/03/2020 13:45" name="coca cola 300ml" description="bem gelada" href="/app/order" class="btn btn-primary" text="pedir novamente" />
        </div>
    );
}

export default Index;
