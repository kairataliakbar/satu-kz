var React = require('react');

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="box-1">
          <a href="./Home page visitor.html">SATU.KZ</a>
        </div>
        <div className="box-2"></div>
        <div className="box-3">
          <form id="formEntry">  
            <input type="text" />
            <input type="password" />
            <button type="submit">Войти</button>
            <button className="register">Регистрация</button>
          </form>
          <div className="formExit">
            <nav className="profil-container">
              <ul>
                <li><a href="#"><i className="fas fa-user-alt"></i><span></span></a>
                  <ul>
                    <li><a href="#"><i className="fas fa-user-circle"></i>Личные кабинет</a></li>
                    <li><a href="pageBasket/basket.html"><i className="fas fa-shopping-basket"></i>Корзина</a></li>
                    <li><a href="addNewAnnouncement/addNewAnnouncement.html"><i className="fas fa-cart-plus"></i>Добавить объявление</a></li>
                    <li><a><i className="fas fa-sign-out-alt"></i>Выход</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Header;