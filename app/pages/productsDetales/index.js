var React = require('react');

class ProductDetales extends React.Component {
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
        <div className="container-product">
          <div className="image-product-container">
            <img alt="image" />
          </div>
        </div>
        <div className="right-container-product">
          <div className="button-admin-product">
            <button>Удалить</button>
            <button>Редактировать</button>
          </div>
          <div className="headline-conatiner"></div>
          <div className="prices-product">
            <div className="prices-product-container"></div>
          </div>
          <div className="bottom-container-product">
            <button>В корзину</button>
            <button>Купить в кредит</button>
          </div>
          <div className="text-area-container"></div>
        </div>
      </div>
    )
  }
}

module.exports = ProductDetales;