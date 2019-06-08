import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from '../pages/home/index.jsx';
import ProductDetales from '../pages/productsDetales/index.jsx';
import CreateProduct from '../pages/createProduct/index.jsx';
import Basket from '../pages/basket/index.jsx';
import PagePhone from '../pages/pagePhone/index.jsx';
import PageComp from '../pages/productsDetales/index.jsx';
import Menu from './Menu.jsx';

class AppLayout extends React.Component {
  render() {
    return(
      <div className="app-container">
        <Header />
        <Menu />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default AppLayout;