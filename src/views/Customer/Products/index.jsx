import React, { Component } from 'react';
import Card from "components/card/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from 'components/Pagination';
import "../../../app.css";

export default class Product extends Component {
    render() {
        return (
            <div classname="container">
                <div className="row cards ">

                    <Card
                        img="https://static.carrefour.com.br/medias/sys_master/images/images/hce/h53/h00/h00/14684794781726.jpg"
                        name="Brahma 355ml"
                        price="Por: R$ 3,19"
                        text="Adicione"
                        class="btn btn-primary"
                        href="/product"
                    />


                    <Card
                        img="https://www.drogariaminasbrasil.com.br/media/product/912/refrigerante-coca-cola-pet-2l-927.jpg"
                        name="Coca-Cola 2l"
                        price="Por: R$ 8,90"
                        href="Detalhes"
                        text="Adicione"
                        class="btn btn-primary"

                    />
                    <Card
                        img="https://static.carrefour.com.br/medias/sys_master/images/images/h8f/haa/h00/h00/26664617869342.jpg"
                        name="Agua 1.5 l"
                        price="Por: R$ 2,19"
                        href="Detalhes"
                        text="Adicione"
                        class="btn btn-primary"
                    />
                    <Card
                        img="https://http2.mlstatic.com/essncia-para-narguile-zomo-strong-red-50g-D_NQ_NP_875141-MLB31704627550_082019-O.webp"
                        name="Essência Para Narguile 50g"
                        price="Por: R$ 19,25"
                        href="Detalhes"
                        text="Adicione"
                        class="btn btn-primary"
                    />
                </div>
                <br /><br /><br />
                <Pagination />
            </div>
        );
    }
}
