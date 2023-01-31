import CriptoUnit from "./CriptoUnit";
import axios from "axios";
import { useState, useEffect } from "react";

const Criptomonedas = () => {
  const [cripto, setCripto] = useState([]);
  useEffect(() => {
    const getCriptos = () => {
      axios
        .get("https://api.coincap.io/v2/assets")
        .then((data) => {
          setCripto(data.data.data);
        })
        .catch((e) => {
          console.log("Se ha producido un error");
        });
    };
    getCriptos();
  }, []);

  return (
    <>
      <h1 className="criptomonedas_list">
        {" "}
        Lista de <br />
        <b className="cripto_name">criptomonedas</b>
      </h1>
      <div className="criptomonedas_page">
        <div className="criptomonedas_container">
          {cripto.map(({ name, id, priceUsd, symbol, rank }) => {
            return (
              <CriptoUnit
                key={id}
                name={name}
                price={priceUsd}
                symbol={symbol}
                rank={rank}
                id={id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Criptomonedas;
