import CriptoTable from "./criptoinfo/CriptoTable";
import CriptoInfo from "./criptoinfo/CriptoInfo";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CriptoDetails = () => {
  const params = useParams();

  // Estado de la criptomoneda actual

  const [cripto, setCripto] = useState([]);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${params.id}
      `)
      .then((response) => response.json())
      .then((data) => {
        setCripto(data.data);
      })
      .catch(() => console.log("Este es un error"));
  }, []);

  // Estado del historial de la criptomoneda actual

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${params.id}/history?interval=d1
      `)
      .then((response) => response.json())
      .then((data) => {
        setHistory(data.data);
      })
      .catch(() => console.log("Este es un error"));
  }, []);

  // Al momento de mostrarlo en la tabla history.length

  return (
    <>
      <h1 className="criptomonedas_list">
        Criptomoneda <br />
        <b className="cripto_name">{cripto.name}</b>
      </h1>

      <div className="criptomonedas_details">
        <CriptoInfo cripto={cripto} />
        <CriptoTable history={history} />
      </div>
    </>
  );
};

export default CriptoDetails;
