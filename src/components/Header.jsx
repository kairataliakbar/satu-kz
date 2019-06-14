/* eslint-disable react/no-unused-state */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";

const users = [{ name: "admin", password: "qwe123" }];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      adminEntry: false,
      userEntry: false,
      userId: "",
      userPassword: ""
    };

    this.onClick = this.onClick.bind(this);
    this.exiteModalWindow = this.exiteModalWindow.bind(this);
    this.entryInWebsite = this.entryInWebsite.bind(this);
    this.userId = this.userId.bind(this);
    this.userPassword = this.userPassword.bind(this);
  }

  onClick() {
    this.setState({ showModal: true });
  }

  exiteModalWindow(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  userId(e) {
    this.setState({ userId: e.target.value });
  }

  userPassword(e) {
    this.setState({ userPassword: e.target.value });
  }

  entryInWebsite() {
    users.map(user => {
      if (
        user.name === this.state.userId ||
        user.password === this.state.userPassword
      ) {
        if (this.state.userId === "admin") {
          this.setState({ adminEntry: true });
        } else {
          this.setState({ userEntry: true });
        }
      } else {
        alert("Неверный логин или пароль");
      }
    });
  }

  render() {
    return (
      <div className="header">
        <div className="box-1">
          <Link to="/">SATU.KZ</Link>
        </div>
        <div className="box-2"></div>
        <div className="box-3">
          {!this.state.userEntry && (
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
                onClick={this.onClick}
              />
            </form>
          )}
          {this.state.userEntry && (
            <div className="formExit">
              <nav className="profil-container">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-user-alt"></i>
                      <span></span>
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-user-circle"></i>Личные кабинет
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-shopping-basket"></i>Корзина
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-cart-plus"></i>
                          Добавить объявление
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-sign-out-alt"></i>Выход
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        {this.state.showModal && (
          <Modal>
            <div className="modal-win" onClick={this.exiteModalWindow}>
              <div
                className="modal-container"
                onClick={e => e.stopPropagation()}
              >
                <h2>Авторизуйтесь</h2>
                <div className="input-win">
                  <input type="text" placeholder="Login" />
                </div>
                <div className="input-win">
                  <input type="email" placeholder="E-mail" />
                </div>
                <div className="input-win">
                  <input type="password" placeholder="Password" />
                </div>
                <button>Регистрация</button>
                <button className="close" onClick={this.exiteModalWindow}>
                  Отмена
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Header;
