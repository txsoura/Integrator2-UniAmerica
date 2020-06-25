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
import Register from "./views/Customer/Register/index";
import DriverLogin from "./views/Driver/Login/index";
import Password from "./views/Customer/Password/index";
import { isAuthenticated } from "auth";
import Product from "./views/Customer/Product/index";
import Message from "./views/Customer/Message/index";
import Profile from "./views/Customer/Profile/index";
import MerchantProfile from "./views/Merchant/Profile/index";
import Products from "./views/Customer/Products/index";

const CustomerRoute = ({ component: Component, ...rest }) => (
    <Route{...rest} render={props => (
        isAuthenticated() ? (
            <Component{...props} />
        ) : (
                <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
            )
    )} />
);

export default (props) => (
    <BrowserRouter>
        <div style={{ marginBottom: 68, marginTop: 70 }}>
            <Switch>
                <CustomerRoute path="/app/cart" component={Cart} />
                <CustomerRoute path="/app/checkout" component={Checkout} />
                <CustomerRoute path="/app/orders" component={Orders} />
                <CustomerRoute path="/app/order/status" component={OrderStatus} />
                <CustomerRoute path="/app/order" component={Order} />
                <CustomerRoute path="/app" exact={true} component={Home} />
                <CustomerRoute path="/app/message" component={Message} />
                <CustomerRoute path="/app/product" component={Product} />
                <CustomerRoute path="/app/profile" component={Profile} />
                <CustomerRoute path="/app/products" component={Products} />

                <CustomerRoute path="/driver/login" component={DriverLogin} />
                <CustomerRoute path="/merchant/profile" component={MerchantProfile} />
                <CustomerRoute path="/" exact={true} component={Landing} />
                <CustomerRoute path="*" component={Status} />

                <Route path="/auth/Login" component={Login} />
                <Route path="/auth/register" component={Register} />
                <Route path="/auth/password" component={Password} />

                <Route path="*" component={Status} />

            </Switch>
        </div>
    </BrowserRouter>
);
