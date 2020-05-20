import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Customer/Home";
import Cart from "./views/Customer/Cart";
import Checkout from "./views/Customer/Checkout";
import Order from "./views/Customer/Order";
import Orders from "./views/Customer/Orders";

export default (props) => (
    <Router>
        <Route path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/order" component={Order} />
        <Route path="/orders" component={Orders} />
        {/* <Redirect from="*" to="/" /> */}
    </Router>
);
