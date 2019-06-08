var React = require('react');
var Header = require('./header/Header.jsx');
var Footer = require('./footer/Footer.jsx');
var Home = require('../pages/home/index.js');
var ProductDetales = require('../pages/productsDetales/index.js');
var CreateProduct = require('../pages/createProduct/index.js');
var Basket = require('../pages/basket/index.js');
var PagePhone = require('../pages/pagePhone/index.js');

class AppContainer extends React.Component {
  render() {
    return(
      <div className="app-container" id="appContainer">
        <Header />
        <PagePhone />
        <Footer />
      </div>
    )
  }
}

module.exports = AppContainer;