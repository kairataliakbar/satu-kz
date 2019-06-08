var React = require('react');

class CreateProduct extends React.Component {
  render() {
    return(
      <div className="main">
        <div className="top-main">Подать объявление на SATU.KZ</div>
        <div className="body-main">
          <form>
            <div className="title-container">
              <div className="left-tc">Заголовок:</div>
              <div className="right-tc">
                <input type="text" className="text-header" />
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Код товара:</div>
              <div className="right-tc">
                <input type="text" className="cod-product" />
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Рубрика:</div>
              <div className="right-tc">
                <select name="heading" className="heading-tc">
                  <option selected disabled>Рубрика</option>
                  <option value="phon">Смартфоны</option>
                  <option value="pc">Компьютеры</option>
                  <option value="tv audio and video">ТВ, аудио и видио</option>
                  <option value="appliances">Бытовая техника</option>
                  <option value="equipment for kitchen">Техника для кухни</option>
                  <option value="home">Дом</option>
                  <option value="auto products and transport">Автотовары и транспорт</option>
                </select>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Модель:</div>
              <div className="right-tc">
                <select name="model" className="heading-tc">
                  <option disabled selected>Mодель</option>
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
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Цвет:</div>
              <div className="right-tc">
                <select name="color" className="heading-tc">
                  <option disabled selected>Цвет</option>
                  <option value="black">Черный</option>
                  <option value="white">Белый</option>
                  <option value="gold">Золотой</option>
                  <option value="yellow">Желтый</option>
                  <option value="green">Зеленый</option>
                  <option value="blue">Синий</option>
                  <option value="brown">Коричневый</option>
                </select>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Год выпуска:</div>
              <div className="right-tc">
                <select name="data" className="heading-tc">
                  <option disabled selected>Год</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                </select>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Цена:</div>
              <div className="right-tc">
                <input type="text" className="text-prices" /> тг.
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Описание и характеристика:</div>
              <div className="right-tc">
                <textarea name="text" className="text-area" cols="80" rows="1"></textarea>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Добавить фото:</div>
              <div className="right-tc">
                <div className="add-img">
                  <input type="file" name="addImg" className="add-img-file" accept="image/jpeg,image/gif,image/png" />
                  <img/>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button>ОПУБЛИКОВАТЬ</button>
              <button><a href="#">ОТМЕНА</a></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = CreateProduct;