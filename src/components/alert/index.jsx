import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => (
    < >
        <div class={props.class} role="alert">
            {props.text}
        </div>
    </>
)

