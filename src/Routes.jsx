import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing/index";
import Home from "./views/Customer/Home/index";
import Cart from "./views/Customer/Cart/index";
import Checkout from "./views/Customer/Checkout/index";
import Status from "./views/Customer/Status/index";
import Orders from "./views/Customer/Orders/index";
import Order from "./views/Customer/Order/index";
import OrderStatus from "./views/Customer/OrderStatus/index";
import Product from "views/Customer/Product";

export default (props) => (
    <BrowserRouter>
        <div style={{ marginBottom: 68, marginTop: 70 }}>
            <Switch>
                <Route path="/" exact={true} component={Landing} />
                <Route path="/home" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/order/status" component={OrderStatus} />
                <Route path="/order" component={Order} />
                <Route path="/product" component={Product} />
                <Route path="*" component={Status} />
            </Switch>
        </div>
    </BrowserRouter>
);
