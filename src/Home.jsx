import React from "react";
import Logo from "./svg/reciclado.svg";
function Home() {
  return (
    <div className="HomeContainer">
      <img width="350px" src={Logo} alt="LogoHome" />
      <h1 className="HomeTitle">ReciclaJACAREÍ</h1>
    </div>
  );
}

export default Home;
