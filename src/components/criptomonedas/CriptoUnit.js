import { Link } from "react-router-dom";

const CriptoUnit = ({ id, name, price, symbol, rank }) => {
  return (
    <div className="cripto_card">
      <div>
        <p className="cripto_card-symbol">{symbol}</p>
        <p className="cripto_card-title">{name}</p>
      </div>
      <p className="cripto_card-price">
        {" "}
        <b>Price:</b> {parseFloat(price).toFixed(2)} USD
      </p>
      <span className="cripto_card-rank">{rank}</span>
      <Link to={`/criptomonedas/${id}`}>
        <button className="details_btn">Detalles</button>
      </Link>
    </div>
  );
};

export default CriptoUnit;
