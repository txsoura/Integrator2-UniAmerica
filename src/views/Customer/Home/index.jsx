import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from 'assets/img/street.jpg'
import Card from 'components/card/index'
import imgProd from 'assets/img/coca.jpg';

function Index() {
    return (
        <div style={{ marginTop: -15 }}>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Em todo lugar, a todo momento!</h5>
                            <p>Faz toda diferença.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container" bg-light>
                <h3 className="title text-center" style={{ marginTop: 30 }}>Promoções</h3>

                <div className="row">
                    <Card img={imgProd} name="Produto 300 ml" price="300.00" href="/product" class="btn btn-primary" text="Ver" />
                    <Card img={imgProd} name="Produto 200 ml" price="500.00" href="/product" class="btn btn-primary" text="Ver" />
                    <Card img={imgProd} name="Produto 30 ml" price="10.00" href="/product" class="btn btn-primary" text="Ver" />
                </div>
            </div>
        </div >
    );
}

export default Index;
