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
          console.log(cripto);
        })
        .catch((e) => {
          console.log("Se ha producido un error");
        });
    };
    getCriptos();
  }, []);
  return cripto
}

export default Criptomonedas