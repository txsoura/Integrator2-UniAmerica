import React, { Component } from 'react';

export class Index extends Component {
    render() {
        return (

            <div className="container" >
                <h4>{this.props.message}</h4>
            </div>
        )
    }
};

export default Index;
