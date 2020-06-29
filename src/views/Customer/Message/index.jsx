import React, { Component } from 'react';
import Mensagem from 'components/message/index';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Você tem 18 anos ou mais?'
        }
    }

    handlerChange = (e) => {
        console.log(e.target.value)
        let message = (e.target.value === '') ? 'informe nos a sua idade ' : 'Olá,  ' + e.target.value;
        this.setState({ ...this.state, message: message });
    }

    render() {
        return (
            <div className="container">
                <input type="text" onChange={this.handlerChange} />
                <Mensagem message={this.state.message} />
            </div>
        );
    }
}
export default Index;
