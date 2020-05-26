import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => (
    <a href={props.href} className={props.class}>{props.text}</a>
)

