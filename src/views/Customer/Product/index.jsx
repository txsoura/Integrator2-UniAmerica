import React, { Component } from 'react'
import Card from "components/card/index";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Product extends Component {
    render() {
        return (
          <div className="container">
              <div style={{color:"red", marginTop:"130px"}}>                  
                <div class="card mb-3 text-center" style={{maxWidth: "840px"}}>
                    <div class="row no-gutters">
                        <div class="col-md-4 text-center">
                            <img src="https://d3o3bdzeq5san1.cloudfront.net/7/6589.jpg" class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Brahma 350ml</h5>
                                <p class="card-text">R$ 3,19</p>
                                <p class="card-text"><small class="text-muted">vai tomar no cuuuuuuuu</small></p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <br /><br /><br />
          </div>  
        );
    }
}