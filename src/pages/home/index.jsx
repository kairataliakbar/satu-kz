import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="bottom-main">
          <div className="top-bottom-main">Популярные товары прямо сейчас</div>
          <div className="container-bottom-main">
            <div className="forvord-container">
              <div className="forvord-container-img">
                <img src="../../../image/iPhone7.jpg" alt="iPhone7"/>
                <div className="forvord-container-text">Смартфон Apple iPhone 7, 32 GB, Black</div>
              </div>
              <div className="forvord-container-button">
                <div className="summa">235 890 ₸</div>
                <button>В корзину</button>
                <button>Купить в кредит</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
