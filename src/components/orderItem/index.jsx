import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
    return (
        <div class="card">
            <div class="card-header">
                nome do comerciante
                <br />
                <h5>data e hora</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">nome do produto</h5>
                <p class="card-text">1x - descrição</p>
                <a href="/order" class="btn btn-primary">pedir novamente</a>
            </div>
        </div>
    );
}
