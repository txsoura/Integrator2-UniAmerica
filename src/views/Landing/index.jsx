import React from "react";
import screen from 'assets/img/screen.jpeg';
import googlePlay from 'assets/img/google-play-badge.svg';
import appleStore from 'assets/img/app-store-badge.svg';
import Icon from 'components/icon/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/vendor/bootstrap/css/bootstrap.min.css";
import "assets/vendor/fontawesome-free/css/all.min.css";
import "assets/vendor/simple-line-icons/css/simple-line-icons.css";
import "assets/device-mockups/device-mockups.min.css";
import "assets/css/new-age.min.css";

function Landing() {
    return (

        <>
            <header class="masthead">
                <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-lg-7 my-auto">
                            <div class="header-content mx-auto">
                                <h1 class="mb-5">Bem vindo, a nova forma de matar a sua sede...</h1>
                                <h3 class="mb-5">Gole,é um aplicativo de entrega de bebidas e petiscos</h3>
                                <a href="/auth/register" class="btn btn-outline btn-xl js-scroll-trigger">Cadastre-se gratuitamente!</a>
                            </div>
                        </div>
                        <div class="col-lg-5 my-auto">
                            <div class="device-container">
                                <div class="device-mockup iphone6_plus portrait white">
                                    <div class="device">
                                        <div class="screen">
                                            <img src={screen} class="img-fluid" alt="" />
                                        </div>
                                        <div class="button">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="download bg-primary text-center" id="download">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto">
                            <h2 class="section-heading">Descubra o que mais gostas de beber!</h2>
                            <p>Em breve, o nosso aplicativo estará disponível em todas as lojas de aplicativos mobile.</p>
                            <div class="badges">
                                <a class="badge-link" href="/"><img src={googlePlay} alt="" /></a>
                                <a class="badge-link" href="/"><img src={appleStore} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features" id="features">
                <div class="container">
                    <div class="section-heading text-center">
                        <h2>Entregas a qualquer hora, e lugar</h2>
                        <p class="text-muted">Porquê usar?</p>
                        <hr />
                    </div>
                    <div class="row">
                        <div class="col-lg-4 my-auto">
                            <div class="device-container">
                                <div class="device-mockup iphone6_plus portrait white">
                                    <div class="device">
                                        <div class="screen">
                                            <img src={screen} class="img-fluid" alt="" />
                                        </div>
                                        <div class="button">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 my-auto">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="feature-item">
                                            <Icon icon="fa fa-glass" />
                                            <h3>Brinde e seja feliz</h3>
                                            <p class="text-muted">O seu pedido, chega rápido que nem um foguete e gelados como a neve.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="feature-item">
                                            <Icon icon="fa fa-map" />
                                            <h3>Em qualquer lugar e momento</h3>
                                            <p class="text-muted">Procuramos o vendedor mais próximo de si, pois nos preocupamos com a sua satisfação.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="feature-item">
                                            <Icon icon="fa fa-money" />
                                            <h3>Pague, somente o que deve</h3>
                                            <p class="text-muted">Os preços dos nossos produtos, são todos tabelados.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta">
                <div class="cta-content">
                    <div class="container">
                        <h2>Pare a sua sede.<br />Um clique, suave como a aguá.</h2>
                        <a href="/app" class="btn btn-outline btn-xl js-scroll-trigger">Pedir</a>
                    </div>
                </div>
                <div class="overlay"></div>
            </section>

            <section class="contact bg-primary" id="contact">
                <div class="container">
                    <h2>Nós
        <i class="fas fa-heart"></i>
        bebidas!</h2>
                    <ul class="list-inline list-social">
                        <li class="list-inline-item social-twitter">
                            <a href="https://twitter.com">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item social-facebook">
                            <a href="https://facebook.com">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="list-inline-item social-instagram">
                            <a href="https://instagram.com">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item social-whatsapp">
                            <a href="https://whatsapp.com">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Landing;
