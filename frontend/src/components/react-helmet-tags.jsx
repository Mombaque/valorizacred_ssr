import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmetTags = () => {
  return (
    <Helmet>
      <title>
        ValorizaCred - Empréstimo consignado, crédito com garantia e crédito
        para empresas
      </title>
      <meta
        name="description"
        content="Empréstimo consignado para aposentados e pensionistas do INSS e servidores públicos. Empréstimo com garantia de imóvel e de veículos. Para sua empresa temos capital de giro."
      />
      <meta
        name="keywords"
        content="valorizacred,financeira,empréstimo,consignado,refinanciamento,portabilidade,simulação,empresa,aposentado,pensionista,inss,servidor,público,capital,giro,dinheiro,folha,pagamento,cartão,crédito,salto,pirapora,sorocaba,garantia,imóvel,veículo,"
      />
      <link rel="canonical" href="http://valorizacred.com" />
    </Helmet>
  );
};

export default ReactHelmetTags;
