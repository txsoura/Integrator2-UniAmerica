import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'components/button/index'

export default props => (
    <div className="col-md-4">
        <div className="card" >
            <img src={props.img} height="250px" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h2 className="card-title pricing-card-title">R$ <small className="text-muted">{props.price}</small></h2>
                <Button href={props.href} class={props.class} text={props.text} />
            </div>
        </div>
    </div>
);

