import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from 'components/input/index'
import img from 'assets/img/ice.jpg'

export default props => (
    <div class="row">
        <div class="col-12 col-sm-12 col-md-2 text-center">
            <img class="img-responsive" src={img} alt="prewiew" width="120"
                height="80" />
        </div>
        <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
            <h4 class="product-name"><strong>{props.name}</strong></h4>
            <h4>
                <small>{props.description}</small>
            </h4>
        </div>
        <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
            <div class="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary col-2">-</button>
                <Input name="quantity" type="number" value="1" class="col-2" />
                <button type="button" class="btn btn-secondary col-2">+</button>
                <button type="button" class="btn btn-outline-danger btn-xs col-2">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <hr />
    </div>

)

