import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>Главная
          </Link>
        </li>
        <li>
          <Link to="/products">
            <i className="fas fa-shopping-cart"></i>Продукты
          </Link>
          <ul>
            <li>
              <Link to="/products/page-phone">Смартфоны</Link>
            </li>
            <li>
              <Link to="/products/page-comp">Компьютеры</Link>
            </li>
            <li>
              <Link to="/products/tv-audio-video">ТВ, аудио и видио</Link>
            </li>
            <li>
              <Link to="/products/appliances">Бытовая техника</Link>
            </li>
            <li>
              <Link to="/products/gamers">Все для геймеров</Link>
            </li>
            <li>
              <Link to="/products/house">Дом</Link>
            </li>
            <li>
              <Link to="/products/auto-products">Автотовары и транспорт</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/help">
            <i className="fas fa-hands-helping"></i>Помощь
          </Link>
        </li>
        <li>
          <Link to="/news">
            <i className="far fa-newspaper"></i>Новости
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <i className="fas fa-atlas"></i>Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
