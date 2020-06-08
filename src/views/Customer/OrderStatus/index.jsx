import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Status from 'components/status'

function Index() {
    return (
        <Status text="Pedido efetuado com sucesso! Ele chegará em breve..." icon="fa fa-check fa-100x" />
    );
}

export default Index;
