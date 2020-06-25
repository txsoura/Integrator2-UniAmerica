import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'components/button/index';
import Input from 'components/input/index'

function Index() {
    return (
        
        <div className="container">
            <div style={{ color: "red", marginTop: "130px" }}>
                <div class="card mb-3 text-center" style={{ maxWidth: "840px" }}>
                    <div class="row no-gutters">
                        <div class="col-md-4 text-center">
                            <img src="https://d3o3bdzeq5san1.cloudfront.net/7/6589.jpg" class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Brahma 350ml</h5>
                                <p class="card-text">R$ 3,19</p>
                                <p class="card-text"><small class="text-muted">Leve 5 e pague 4 ! ! !</small></p>
                                <div class="btn-group" role="group" aria-label="Basic example" style={{marginLeft: "110px"}}>
                                    <button type="button" class="btn btn-secondary col-2">-</button>
                                    <Input name="quantity" type="number" value="1" class="col-2" />
                                    <button type="button" class="btn btn-secondary col-2">+</button>
                                    <button type="button" class="btn btn-outline-danger btn-xs col-2">
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <hr className="mb-3" />
                                <Button class="btn btn-success btn-lg" href="" text="ADICIONAR" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                        
    );

}

export default Index;
