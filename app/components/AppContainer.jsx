var React = require('react');
var Header = require('./header/Header.jsx');
var Main = require('./main/Main.jsx');
var Footer = require('./footer/Footer.jsx');

class AppContainer extends React.Component {
  render() {
    return(
      <div className="app-container" id="appContainer">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

module.exports = AppContainer;