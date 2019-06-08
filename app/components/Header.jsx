import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="box-1"><a href="#">SATU.KZ</a></div>
        <div className="box-2"></div>
        <div className="box-3">
          <form>  
            <input type="text" name="login" /> 
            <input type="password" name="password" />
            <input type="submit" name="entry" value="Войти" />
            <input type="submit" name="register" value="Регистрация" />
          </form>
          <div className="formExit">
            <nav className="profil-container">
              <ul>
                <li><a href="#"><i className="fas fa-user-alt"></i><span></span></a>
                  <ul>
                    <li><a href="#"><i className="fas fa-user-circle"></i>Личные кабинет</a></li>
                    <li><a href="#"><i className="fas fa-shopping-basket"></i>Корзина</a></li>
                    <li><a href="#"><i className="fas fa-cart-plus"></i>Добавить объявление</a></li>
                    <li><a href="#"><i className="fas fa-sign-out-alt"></i>Выход</a></li>
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

export default Header;