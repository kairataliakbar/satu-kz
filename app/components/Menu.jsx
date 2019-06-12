import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/"><i className="fas fa-home"></i>Главная</Link></li>
        <li><Link to="/products"><i className="fas fa-shopping-cart"></i>Продукты</Link>
          <ul>
            <li><a href="#">Смартфоны</a></li>
            <li><a href="#">Компьютеры</a></li>
            <li><a href="#">ТВ, аудио и видио</a></li>
            <li><a href="#">Бытовая техника</a></li>
            <li><a href="#">Все для геймеров</a></li>
            <li><a href="#">Дом</a></li>
            <li><a href="#">Автотовары и транспорт</a></li>
          </ul>
        </li>
        <li><Link to="/help"><i className="fas fa-hands-helping"></i>Помощь</Link></li>
        <li><Link to="/news"><i className="far fa-newspaper"></i>Новости</Link></li>
        <li><Link to="/contacts"><i className="fas fa-atlas"></i>Контакты</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;