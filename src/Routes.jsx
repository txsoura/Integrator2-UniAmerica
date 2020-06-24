import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Landing from "./views/Landing/index";
import Home from "./views/Customer/Home/index";
import Cart from "./views/Customer/Cart/index";
import Checkout from "./views/Customer/Checkout/index";
import Status from "./views/Customer/Status/index";
import Orders from "./views/Customer/Orders/index";
import Order from "./views/Customer/Order/index";
import OrderStatus from "./views/Customer/OrderStatus/index";
import Login from "./views/Customer/Login/index";
import Signup from "./views/Customer/Sign-up/index";
import ListaProdutos from "./views/Customer/ProductList/index";
import Entregador from "./views/Customer/Entregador/index";
import Recuperar from "./views/Customer/Recuperarsenha/index";
import { isAuthenticated } from "auth";
import Product from "views/Customer/Product";
import Perfil from "views/Customer/Profile";
import Mensagem from "./views/Customer/MensagemExibida/index";

const PrivateRoute= ({ component: Component, ...rest }) => (
    <Route{...rest} render={props => (
        isAuthenticated() ? (
            <Component{...props} />
        ) : (
                <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
            )
    )} />
);

const GuestRoute = ({ component: Component, ...rest }) => (
    <Route{...rest} render={props => (
        !!isAuthenticated() ? (
            <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
        ) : (
                <Component{...props} />
            )
    )} />
);


export default (props) => (
    <BrowserRouter>
        <div style={{ marginBottom: 68, marginTop: 70 }}>
            <Switch>
                <Route path="/" exact={true} component={Landing} />
                <PrivateRoute path="/app/cart" component={Cart} />
                <PrivateRoute path="/app/checkout" component={Checkout} />
                <PrivateRoute path="/app/orders" component={Orders} />
                <PrivateRoute path="/app/order/status" component={OrderStatus} />
                <PrivateRoute path="/app/order" component={Order} />
                <PrivateRoute path="/app/home" component={Home} />
                <PrivateRoute path="/app/product" component={Product} />
                <PrivateRoute path="/app/profile" component={Perfil} />

              
                <PrivateRoute path="/products/listaProdutos" component={ListaProdutos} />

                <Route path="/auth/mensagem" component={Mensagem} />

                <Route path="/driver/entregador" component={Entregador} />

                <Route path="/auth/login" component={Login} />
                <Route path="/auth/register" component={Signup} />
                <Route path="/auth/password" component={Recuperar} />

                <Route path="*" component={Status} />

            </Switch>
        </div>
    </BrowserRouter>
);
