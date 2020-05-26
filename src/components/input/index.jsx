import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => (
    <>
        <label for={props.name}>{props.label}</label>
        <input type={props.type} className={props.class} id={props.name} name={props.name} placeholder={props.placeholder} value={props.value} />
    </>
)
