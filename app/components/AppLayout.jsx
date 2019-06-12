import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Menu from './Menu.jsx';

import Home from '../pages/home/index.jsx';
import ProductDetales from '../pages/productsDetales/index.jsx';
import CreateProduct from '../pages/createProduct/index.jsx';
import Basket from '../pages/basket/index.jsx';
import PagePhone from '../pages/pagePhone/index.jsx';
import PageComp from '../pages/productsDetales/index.jsx';

class AppLayout extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Header />
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/basket" component={Basket} />
            <Route path="/productDetales" component={ProductDetales} />
            <Route path="/createProduct" component={CreateProduct} />
            <Route path="/pagePhone" component={PagePhone} />
            <Route path="/pageComp" component={PageComp} />
            <Route path="/products" component={Home} />
            <Route path="/help" component={() => <div>Help</div>} />
            <Route path="/news" component={() => <div>News</div>} />
            <Route path="/contacts" component={() => <div>Contacts</div>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default AppLayout;