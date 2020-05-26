import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderItem from 'components/orderItem/index'

function Orders() {
    return (
        <div className="container">
            <OrderItem merchant="comerciante" date="13/03/2020 13:45" name="coca cola 300ml" description="bem gelada" href="/order" class="btn btn-primary" text="pedir novamente" />
            <br />
            <OrderItem merchant="comerciante" date="13/03/2020 13:45" name="coca cola 300ml" description="bem gelada" href="/order" class="btn btn-primary" text="pedir novamente" />
        </div>
    );
}

export default Orders;
