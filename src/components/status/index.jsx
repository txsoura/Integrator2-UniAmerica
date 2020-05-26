import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from 'components/icon/index'

export default props => (
    < >
        <div style={{ fontSize: '296px', marginLeft: '47%' }}>
            <Icon icon={props.icon} />
        </div>
        <h1 className="title" style={{ textAlign: 'center' }}>{props.text}</h1>
    </>
)

