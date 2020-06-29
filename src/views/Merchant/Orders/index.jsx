import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/css/historysales.css'
import Profile from 'assets/img/capaprofile.jpg'


function Index() {
    return (
        <>
            <div className="card">
                <img className="card-img" src={Profile} alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title">Caio Villardo</h5>
                    <h6 className="card-text2">Data:24/06/2020</h6>
                    <p className="card-text">ótimo atendimento, chegou rápido e a bebida gelada.</p>

                </div>
                <div className="card-body-link">
                    <a href="#/" className="card-link">Ver Mais</a>
                </div>
            </div>

            <div className="card">
                <img className="card-img" src={Profile} alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title">Lio Croons</h5>
                    <h6 className="card-text2">Data:19/06/2020</h6>
                    <p className="card-text">Sensacional! SCrrrt!.</p>

                </div>
                <div className="card-body-link">
                    <a href="#/" className="card-link">Ver Mais</a>
                </div>
            </div>

            <div className="card">
                <img className="card-img" src={Profile} alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title">Edson Pereira</h5>
                    <h6 className="card-text2">Data:21/06/2020</h6>
                    <p className="card-text">Po muito foda! Curti o app.</p>

                </div>
                <div className="card-body-link">
                    <a href="#/" className="card-link">Ver Mais</a>
                </div>
            </div>

            <div className="card">
                <img className="card-img" src={Profile} alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title">Victor Tesoura</h5>
                    <h6 className="card-text2">Data:17/06/2020</h6>
                    <p className="card-text" ótimo a>ótimo app! gostei muito.</p>

                </div>
                <div className="card-body-link">
                    <a href="#/" className="card-link">Ver Mais</a>
                </div>
            </div>

        </>
    );
}

export default Index;
