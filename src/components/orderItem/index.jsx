import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'components/button/index'

export default props => (
    <div class="card">
        <div class="card-header">
            {props.merchant}
            <br />
            <h5>{props.date}</h5>
        </div>
        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.description}</p>
            <Button href={props.href} class={props.class} text={props.text} />
        </div>
    </div>
);

