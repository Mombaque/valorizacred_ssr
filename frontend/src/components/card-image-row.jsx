import React, { Component } from "react";
import CardImage from "./card-image";

class CardImageRow extends Component {
  state = {};
  render() {
    const style = { margin: "10px" };
    return (
      <div class="row" style={style}>
        <CardImage
          imagePath="/images/empresarios.jpg"
          alt=""
          title="Capital de giro para pequenas e médias empresas"
          content="AAAAAAAAAAAAAAAAAAAAA"
        />
        <CardImage
          imagePath="/images/dinheiro.jpg"
          alt=""
          title="Empréstimo consignado"
          content="Para aposentados e pensionistas do INSS e servidores públicos (estaduais, municipais e federais), com atendimento personalizado e condições especiais."
        />
        <CardImage
          imagePath="/images/casa.jpg"
          alt=""
          title="Empréstimo com garantia de imóvel"
          content="AAAAAAAAAAAAAAAAAAAAA"
        />
        <CardImage
          imagePath=""
          alt=""
          title="Crédito com garantia de veículo"
          content="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        />
      </div>
    );
  }
}

export default CardImageRow;
