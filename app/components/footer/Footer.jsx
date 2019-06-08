var React = require('react');

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
            <div className="footer-text"><a href="#">Смартфоны</a></div>
            <div className="footer-text"><a href="#">Компьютеры</a></div>
            <div className="footer-text"><a href="#">ТВ, аудио и видио</a></div>
            <div className="footer-text"><a href="#">Автотовары</a></div>
            <div className="footer-text"><a href="#">Бытовая техника</a></div>
            <div className="footer-text"><a href="#">Техника для кухни</a></div>
            <div className="footer-text"><a href="#">Дом</a></div>
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
            <div className="footer-text"><a href="#">help_shop@satu.kz</a></div>
          </div>
        </div>
      <div className="footer-copyright">© ТОО «SATU.KZ Магазин», 2019</div>
    </footer>
    )
  }
}

module.exports = Footer;