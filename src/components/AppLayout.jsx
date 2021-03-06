import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./Footer";
import Menu from "./Menu";

import Home from "../pages/home/index";
import ProductDetails from "../pages/productsDetails/index";
import CreateProduct from "../pages/newProduct/index";
import Basket from "../pages/basket/index";
import PagePhone from "../pages/pagePhone/index";
import PageComp from "../pages/pageComp/index";

const AppLayout = () => {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/basket" component={Basket} />
          <Route path="/product-details/:code" component={ProductDetails} />
          <Route path="/create-product" component={CreateProduct} />
          <Route path="/products/page-phone" component={PagePhone} />
          <Route path="/products/page-comp" component={PageComp} />
          <Route exact path="/products" component={Home} />
          <Route path="/help" component={() => <div>Help</div>} />
          <Route path="/news" component={() => <div>News</div>} />
          <Route path="/contacts" component={() => <div>Contact</div>} />
          <Route
            path="/products/tv-audio-video"
            component={() => <div>Tv, Audio and Video</div>}
          />
          <Route
            path="/products/appliances"
            component={() => <div>Appliances</div>}
          />
          <Route
            path="/products/gamers"
            component={() => <div>All for Gamers</div>}
          />
          <Route path="/products/house" component={() => <div>House</div>} />
          <Route
            path="/products/auto-products"
            component={() => <div>Auto products</div>}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppLayout;
