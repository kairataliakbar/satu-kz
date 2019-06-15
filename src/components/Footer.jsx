import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <div className="f-box-1">
          <div className="footer-forvord-text">SATU.KZ</div>
          <div className="footer-text">
            <Link to="/">Вход/Регистрация</Link>
          </div>
        </div>
        <div className="f-box-2">
          <div className="footer-forvord-text">Каталог товаров</div>
          <div className="footer-text">
            <Link to="/products/page-phone">Смартфоны</Link>
          </div>
          <div className="footer-text">
            <Link to="/products/page-comp">Компьютеры</Link>
          </div>
          <div className="footer-text">
            <Link to="/products/tv-audio-video">ТВ, аудио и видио</Link>
          </div>
          <div className="footer-text">
            <Link to="/products/gamers">Все для геймеров</Link>
          </div>
          <div className="footer-text">
            <Link to="/products/appliances">Бытовая техника</Link>
          </div>
          <div className="footer-text">
            <Link to="/products/house">Дом</Link>
          </div>
          <div className="footer-text">
            <Link to="/products/auto-products">Автотовары и транспорт</Link>
          </div>
        </div>
        <div className="f-box-3">
          <div className="footer-forvord-text">Партнерам</div>
          <div className="footer-text">
            <Link to="/">Вход в кабинет продавца</Link>
          </div>
          <div className="footer-forvord-text">Документы</div>
          <div className="footer-text">
            <Link to="/">Пользовательское соглашение</Link>
          </div>
          <div className="footer-text">
            <Link to="/">Договор присоединения</Link>
          </div>
        </div>
        <div className="f-box-4">
          <div className="footer-forvord-text">Помощь и контакты</div>
          <div className="footer-text">
            <Link to="/help">help_shop@satu.kz</Link>
          </div>
          <div className="footer-text">
            <Link to="/contacts">contacts_shop@satu.kz</Link>
          </div>
        </div>
      </div>
      <div className="footer-copyright">© ТОО «SATU.KZ Магазин», 2019</div>
    </footer>
  );
};

export default Footer;
