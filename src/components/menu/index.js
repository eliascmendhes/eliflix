import React from "react";
import Logo from "../../assets/img/logo1.png";
import Button from '../Button'
import "./Menu.css";
// import ButtonLink from "./components/ButtonLink";
function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
