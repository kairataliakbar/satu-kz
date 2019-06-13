import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div className="footer-box">
          <div className="f-box-1">
            <div className="footer-forvord-text">SATU.KZ</div>
            <div className="footer-text"><a href="#">Вход/Регистрация</a></div>
          </div>
          <div className="f-box-2">
            <div className="footer-forvord-text">Каталог товаров</div>
            <div className="footer-text"><Link to="/pagePhone">Смартфоны</Link></div>
            <div className="footer-text"><Link to="/pageComp">Компьютеры</Link></div>
            <div className="footer-text"><Link to="/tvAudioVideo">ТВ, аудио и видио</Link></div>
            <div className="footer-text"><Link to="/autoProducts">Автотовары</Link></div>
            <div className="footer-text"><Link to="/appliances">Бытовая техника</Link></div>
            <div className="footer-text"><Link to="allForGamers">Все для геймеров</Link></div>
            <div className="footer-text"><Link to="/house">Дом</Link></div>
          </div>
          <div className="f-box-3">
            <div className="footer-forvord-text">Партнерам</div>
            <div className="footer-text"><a href="#">Вход в кабинет продавца</a></div>
            <div className="footer-forvord-text">Документы</div>
            <div className="footer-text"><a href="#">Пользовательское соглашение</a></div>
            <div className="footer-text"><a href="#">Договор присоединения</a></div>
          </div>
          <div className="f-box-4">
            <div className="footer-forvord-text">Помощь и контакты</div>
            <div className="footer-text"><Link to="/help">help_shop@satu.kz</Link></div>
            <div className="footer-text"><Link to="/contacts">contacts_shop@satu.kz</Link></div>
          </div>
        </div>
        <div className="footer-copyright">© ТОО «SATU.KZ Магазин», 2019</div>
      </footer>
    )
  }
}

export default Footer;