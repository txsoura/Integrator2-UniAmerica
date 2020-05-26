import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">nome do produto</h6>
                <small className="text-muted">1x - descrição</small>
            </div>
            <span className="text-muted">R$ 12,00</span>
        </li>
    )
}
