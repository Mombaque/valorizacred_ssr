import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer bg-light">
        <div className="row">
          {getAddress()}
          {getContact()}
        </div>
      </footer>
    </div>
  );
};

const getAddress = () => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="widget subscribe no-box">
        <h5 className="widget-title">
          <span>ValorizaCred</span>
        </h5>
        <p>Rua Dorival de Barros Leite, 55, Centro - Salto de Pirapora </p>
      </div>
    </div>
  );
};

const getContact = () => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="widget no-box">
        <h5 className="widget-title">
          <span>Contato</span>
        </h5>
        <ul className="thumbnail-widget">
          <li>{getPhoneItem("(15) 3491-1468")}</li>
          <li>{getPhoneItem("(15) 99741-3771")}</li>
        </ul>
      </div>
    </div>
  );
};
const getPhoneItem = phone => {
  let style = { textAlign: "left" };
  return (
    <div className="thumb-content" style={style}>
      <p>{phone}</p>
    </div>
  );
};

export default Footer;
