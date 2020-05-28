import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing/index";
import Home from "./views/Customer/Home/index";
import Cart from "./views/Customer/Cart/index";
import Checkout from "./views/Customer/Checkout/index";
import Status from "./views/Customer/Status/index";
import Orders from "./views/Customer/Orders/index";

export default (props) => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="*" component={Status} />
        </Switch>
    </BrowserRouter>
);
