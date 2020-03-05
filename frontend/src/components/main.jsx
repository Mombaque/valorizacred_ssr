import React, { Component } from "react";
import NavBar from "./navbar";
import CardsImageRow from "./card-image-row";
import MainImage from "./main-image";
import Footer from "./footer";
import ReactHelmetTags from "./react-helmet-tags";
class Main extends Component {
  onClickWhatsApp = () => {
    window.open("https://wa.me/5515997413771", "_blank");
  };

  render() {
    console.log(process.env.ENV);

    const buttonStyle = { fontSize: "30px" };
    const infoSpanStyle = { fontSize: "30px", margin: "4px" };
    return (
      <div className="App">
        <ReactHelmetTags />
        <NavBar onClickWhatsApp={this.onClickWhatsApp} />

        <span style={infoSpanStyle} className="badge badge-pill badge-dark">
          Conheça nossas soluções de crédito
        </span>

        <CardsImageRow />

        <button
          className="btn btn-primary btn-sn m-5"
          style={buttonStyle}
          onClick={this.onClickWhatsApp}
        >
          Ir para nosso WhatsApp
        </button>

        <MainImage />
        <Footer />
      </div>
    );
  }
}

export default Main;
