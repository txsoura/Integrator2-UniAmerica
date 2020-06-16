import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => (

    <>
    <div className="form-group">
        <label for={props.name}>{props.label}</label>
        <input type={props.type} className={props.class} id={props.name} name={props.name} placeholder={props.placeholder} value={props.value} />
    </div>
    </>

)
