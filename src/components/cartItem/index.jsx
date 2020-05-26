import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from 'components/input/index'

export default function Index() {
    return (
        <div class="row">
            <div class="col-12 col-sm-12 col-md-2 text-center">
                <img class="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width="120"
                    height="80" />
            </div>
            <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                <h4 class="product-name"><strong>nome do produto</strong></h4>
                <h4>
                    <small>descrição</small>
                </h4>
            </div>
            <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                <div class="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                    <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                </div>
                <div class="col-4 col-sm-4 col-md-4">
                    <div class="quantity">
                        <Input type="button" value="+" class="plus" />
                        <Input name="quantity" type="number" value="1" class="qty" />
                        <Input type="button" value="-" class="minus" />
                    </div>
                </div>
                <div class="col-2 col-sm-2 col-md-2 text-right">
                    <button type="button" class="btn btn-outline-danger btn-xs">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <hr />
        </div>

    )
}
