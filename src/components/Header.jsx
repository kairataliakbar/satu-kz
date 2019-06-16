import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";

const admin = { name: "admin", password: "qwe123" };

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      profileModal: false,
      adminEntry: false,
      userName: "",
      userPassword: ""
    };

    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.userName = this.userName.bind(this);
    this.userPassword = this.userPassword.bind(this);
    this.entryInWebsite = this.entryInWebsite.bind(this);
    this.exitWebsite = this.exitWebsite.bind(this);
  }

  modalOpen() {
    this.setState({ showModal: true });
  }

  modalClose() {
    this.setState({ showModal: false });
  }

  userName(e) {
    this.setState({ userName: e.target.value });
  }

  userPassword(e) {
    this.setState({ userPassword: e.target.value });
  }

  entryInWebsite() {
    const { userName } = this.state;
    const { userPassword } = this.state;

    this.setState({ profileModal: true, showModal: false });

    if (admin.name === userName && admin.password === userPassword) {
      this.setState({ userName: admin.name, adminEntry: true });
    }
  }

  exitWebsite() {
    this.setState({ userName: "", profileModal: false });
  }

  render() {
    const { profileModal } = this.state;
    const { showModal } = this.state;
    const { userName } = this.state;
    const { adminEntry } = this.state;
    return (
      <div className="header">
        <div className="box-1">
          <Link to="/">SATU.KZ</Link>
        </div>
        <div className="box-2"></div>
        <div className="box-3">
          {!profileModal && (
            <form>
              <input
                type="text"
                name="login"
                size="16"
                onChange={this.userName}
              />
              <input
                type="password"
                name="password"
                size="16"
                onChange={this.userPassword}
              />
              <input
                type="button"
                className="input-submit"
                name="entry"
                value="Войти"
                onClick={this.entryInWebsite}
              />
              <input
                type="button"
                className="input-submit"
                name="register"
                value="Регистрация"
                onClick={this.modalOpen}
              />
            </form>
          )}
          {profileModal && (
            <div className="formExit">
              <nav className="profil-container">
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fas fa-user-alt"></i>
                      <span>{userName}</span>
                    </Link>
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="fas fa-user-circle"></i>Личные кабинет
                        </Link>
                      </li>
                      <li>
                        <Link to="/basket">
                          <i className="fas fa-shopping-basket"></i>Корзина
                        </Link>
                      </li>
                      {adminEntry && (
                        <li>
                          <Link to="/create-product">
                            <i className="fas fa-cart-plus"></i>
                            Добавить объявление
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link to="/" onClick={this.exitWebsite}>
                          <i className="fas fa-sign-out-alt"></i>Выход
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        <Modal open={showModal} onClose={this.modalClose}>
          <div className="modal-class">
            <h2>Авторизуйтесь</h2>
            <input type="text" placeholder="Login" onChange={this.userName} />
            <input type="email" placeholder="E-mail" />
            <input
              type="password"
              placeholder="Password"
              onChange={this.userPassword}
            />
            <button type="button" onClick={this.entryInWebsite}>
              Регистрация
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Header;
