import React, { Component } from 'react';

export class Index extends Component {
    render() {
        return (
            <div className >
                <h1>{this.props.message}</h1>
            </div>
        )
    }
};

export default Index;
