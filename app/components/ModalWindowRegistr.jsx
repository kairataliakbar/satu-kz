import React from 'react';

class ModalWindowRegistr extends React.Component {
  render() {
    return (
      <div className="modal-Win">
        <div className="modal-container">
          <h2>Авторизуйтесь</h2>
          <form>
            <div className="login-win"><input type="text" placeholder="Login"/></div>
            <div className="email-win"><input type="email" placeholder="E-mail"/></div>
            <div className="password-win"><input type="password" placeholder="Password"/></div>
            <button>Регистрация</button>
            <button className="close">Отмена</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ModalWindowRegistr;