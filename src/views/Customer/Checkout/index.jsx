import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutItem from 'components/checkoutItem/index'

function Home() {
    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Produtos</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <CheckoutItem />
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">cupom</h6>
                                <small>EXAMPLECODE5</small>
                            </div>
                            <span className="text-success">-R$ 5,00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>R$ 20,00</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Cupom" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Adicionar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Endereço</h4>
                    <form className="needs-validation" novalidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="firstName">Nome</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                <div className="invalid-feedback">
                                    Preencha um nome válido.
                  </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="lastName">CPF</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                <div className="invalid-feedback">
                                    Preencha um CPF válido.
                  </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="email">Email <span className="text-muted">(Opcional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Por favor, preencha um email válido.
                </div>
                        </div>

                        <div className="mb-3">
                            <label for="address">Endereço</label>
                            <input type="text" className="form-control" id="address" placeholder="Avenida das cataratas, 137" required />
                            <div className="invalid-feedback">
                                Preencha o endereço de entrega.
                </div>
                        </div>

                        <div className="mb-3">
                            <label for="address2">Complemento <span className="text-muted">(Opcional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Próximo ao Panorama" />
                        </div>

                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label for="zip">CEP</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required />
                                <div className="invalid-feedback">
                                    Preencha um CEP válido.
                  </div>
                            </div>
                        </div>
                        <hr className="mb-4" />

                        <h4 className="mb-3">Método de pagamento</h4>

                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                                <label className="custom-control-label" for="credit">Cartão de crédito/débito</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                <label className="custom-control-label" for="debit">Maquina de cartão</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                <label className="custom-control-label" for="paypal">Dinheiro</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="cc-name">Nome no cartão</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                <small className="text-muted">Todo nome, conforme escrito no cartão</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                  </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="cc-number">Número do cartão</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                <div className="invalid-feedback">
                                    Credit card number is required
                  </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label for="cc-expiration">Validade</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                <div className="invalid-feedback">
                                    Expiration date required
                  </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="cc-cvv">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                <div className="invalid-feedback">
                                    Security code required
                  </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Efetuar pedido</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
