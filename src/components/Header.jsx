import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  modalOpen() {
    this.setState({ showModal: true });
  }

  modalClose() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="header">
        <div className="box-1">
          <Link to="/">SATU.KZ</Link>
        </div>
        <div className="box-2"></div>
        <div className="box-3">
          <form>
            <input type="text" name="login" size="16" />
            <input type="password" name="password" size="16" />
            <input
              type="button"
              className="input-submit"
              name="entry"
              value="Войти"
            />
            <input
              type="button"
              className="input-submit"
              name="register"
              value="Регистрация"
              onClick={this.modalOpen}
            />
          </form>
          <div className="formExit">
            <nav className="profil-container">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fas fa-user-alt"></i>
                    <span></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fas fa-user-circle"></i>Личные кабинет
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fas fa-shopping-basket"></i>Корзина
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fas fa-cart-plus"></i>
                        Добавить объявление
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fas fa-sign-out-alt"></i>Выход
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Modal open={showModal} onClose={this.modalClose}>
          <div className="modal-class">
            <h2>Авторизуйтесь</h2>
            <input type="text" placeholder="Login" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button type="button">Регистрация</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Header;
