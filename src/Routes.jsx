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
import Login from "./components/Form/Login/index";
import Signup from "./components/Form/Sign-up/index";
import Entregador from "./components/Form/Entregador/index";
import Recuperar from "./components/Form/Recuperarsenha/index";
import { isAuthenticated } from "auth";
import Product from "views/Customer/Product/index";
import Perfil from "views/Customer/Profile/index";
import Products from "views/Customer/Products/index";

const CustomerRoute = ({ component: Component, ...rest }) => (
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
                <CustomerRoute path="/app/cart" component={Cart} />
                <CustomerRoute path="/app/checkout" component={Checkout} />
                <CustomerRoute path="/app/orders" component={Orders} />
                <CustomerRoute path="/app/order/status" component={OrderStatus} />
                <CustomerRoute path="/app/order" component={Order} />
                <CustomerRoute path="/app" component={Home} />
                <CustomerRoute path="/app/product" component={Product} />
                <CustomerRoute path="/app/profile" component={Perfil} />
                <CustomerRoute path="/app/products" component={Products} />

                <CustomerRoute path="/driver/entregador" component={Entregador} />

                <GuestRoute path="/auth/Login" component={Login} />
                <GuestRoute path="/auth/register" component={Signup} />
                <GuestRoute path="/auth/password" component={Recuperar} />

                <Route path="*" component={Status} />

            </Switch>
        </div>
    </BrowserRouter>
);
