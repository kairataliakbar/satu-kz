var React = require('react');
var Header = require('./header/Header.jsx')

class AppContainer extends React.Component {
  render() {
    return(
      <div className="app-container" id="appContainer">
        <Header/>
        <div className="main" id="mainContainer"></div>
        <div className="footer" id="footer"></div>
      </div>
    )
  }
}

module.exports = AppContainer;