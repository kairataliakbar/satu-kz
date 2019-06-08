var React = require('react');

class Home extends React.Component {
  render() {
    return(
      <div className="main">
        <nav className="menu">
          <ul>
            <li><a href="#"><i className="fas fa-home"></i>Главная</a></li>
            <li><a href="#"><i className="fas fa-shopping-cart"></i>Продукты</a>
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
            <li><a href="#"><i className="fas fa-hands-helping"></i>Помощь</a></li>
            <li><a href="#"><i className="far fa-newspaper"></i>Новости</a></li>
            <li><a href="#"><i className="fas fa-atlas"></i>Контакты</a></li>
          </ul>
        </nav>
        <div className="bottom-main">
          <div className="top-bottom-main">Популярные товары прямо сейчас</div>
          <div className="container-bottom-main"></div>
        </div>
      </div>
    )
  }
}

module.exports = Home;