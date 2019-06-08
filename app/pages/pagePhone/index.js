var React = require('react');

class PagePhpne extends React.Component {
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
          <div className="top-bottom-main">Смартфоны</div>
          <div className="container-bottom">
            <div className="filter-main">
              <div className="title-filter">ФИЛЬТРЫ</div>
              <form>
                <p className="title-filter">Цена</p>
                <p><span>от - </span><input type="number" min="1" max="1000000" value="1" className="price-product-filter" /></p>
                <p><span>до - </span><input type="number" min="1" max="1000000" value="1000000" className="price-product-filter" /></p>
                <p className="title-filter">Производитель</p>
                <p>
                  <select name="productManufacturerFilter" className="product-filter">
                    <option>Mодель</option>
                    <option value="apple">Apple</option>
                    <option value="samsung">Samsung</option>
                    <option value="htc">HTC</option>
                    <option value="huawei">Huawei</option>
                    <option value="xiaomi">Xiaomi</option>
                    <option value="lg">LG</option>
                    <option value="lenova">Lenova</option>
                    <option value="sony">Sony</option>
                    <option value="meizu">Meizu</option>
                    <option value="oppo">OPPO</option>
                    <option value="acer">Acer</option>
                    <option value="asus">Asus</option>
                    <option value="hp">HP</option>
                    <option value="tefal">Tefal</option>
                    <option value="canon">Canon</option>
                    <option value="philips">Philips</option>
                    <option value="haier">Haier</option>
                  </select>
                </p>
                <p className="title-filter">Цвет</p>
                <p>
                  <select name="color" className="product-filter">
                    <option>Цвет</option>
                    <option value="black">Черный</option>
                    <option value="white">Белый</option>
                    <option value="gold">Золотой</option>
                    <option value="yellow">Желтый</option>
                    <option value="green">Зеленый</option>
                    <option value="blue">Синий</option>
                    <option value="brown">Коричневый</option>
                  </select>
                </p>
                <p className="title-filter">Год</p>
                <p>
                  <select name="data" className="product-filter">
                    <option>Год</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                  </select>
                </p>
                <button>Покозать</button>
              </form>
            </div>
            <div className="container-bottom-main"></div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = PagePhpne;