import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Input from 'components/input/index';
import Button from 'components/button/index';

export default class Perfil extends Component {
    render() {
        return (
            <div className="container" style={{ marginBottom: 100 }} >
                 
                <svg class="bi bi-person-circle" width="9em" height="10em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg>
                    
                <div className="container" style={{ marginBottom: 100 }} >
                    <div className="row">
                
                        <div className="col-md-6 mb-3">
                            <Input name="name" value="Edson Pereira" label="Nome" type="text" class="form-control" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <Input name="email" value="ed*******@gmail.com" label="Email" type="text" class="form-control" />   
                        </div>
                    
                        <div className="col-md-6 mb-3">
                            <Input name="senha" value="***********" label="Senha" type="text" class="form-control" />   
                        </div>
                    
                        <div className="col-md-6 mb-3">
                            <Input name="zip" value="85.853-728" label="CEP" type="text" class="form-control" />   
                        </div>

                        <div className="col-md-6 mb-3">
                            <Input name="address" value="Avenida Maria Bubiak 2500" label="Endereço" type="text" class="form-control" />   
                        </div>

                        <div className="col-md-6 mb-3">
                            <Input name="complement" value="Condominio Villa Concientia" label="Complemento" type="text" class="form-control" />   
                        </div>

                    
                        <div className="col-md-6 mb-3">
                            <Input name="cpf" value="168.***.***-90" label="CPF" type="text" class="form-control" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <Input name="card" value="ELO CRÉDITO *****123" label="Dados do Cartão" type="text" class="form-control" />   
                        </div>

                        
                        <hr className="mb-3" />
                                
                                <Button class="btn btn-dark btn-lg" href="" text="Editar Informações" />
                                         
                    </div>
                </div>            
            </div>    
        );
    }
}