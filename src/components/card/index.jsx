import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from 'assets/img/coca.jpg';

export default function Index() {
    return (
        <div className="col-md-4">
            <div className="card" >
                <img src={img} height="250px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Produto 300 ml</h5>
                    <h2 className="card-title pricing-card-title">R$ <small className="text-muted">300,00</small></h2>
                    <a href="/product" className="btn btn-primary">Ver</a>
                </div>
            </div>
        </div>
    );
}
