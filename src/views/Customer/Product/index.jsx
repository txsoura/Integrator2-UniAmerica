import React, { Component } from 'react'
import Card from "components/card/index";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Product extends Component {
    render() {
        return (
          <div className="container">
              <div className="row cards">

                <Card
                    img="https://d3o3bdzeq5san1.cloudfront.net/7/6589.jpg"
                    name="Brahma 350ml"
                    price="R$ 3,19"
                />
              </div>
              <br /><br /><br />
          </div>  
        );
    }
}