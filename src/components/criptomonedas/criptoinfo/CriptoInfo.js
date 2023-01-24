const CriptoInfo = ({ cripto }) => {
  return (
    <div className="info_container">
      <h2 className="info_name">{cripto.name}</h2>
      <span className="info_symbol">{cripto.symbol}</span>
      <div>
        <p>Precio: {parseFloat(cripto.priceUsd ? cripto.priceUsd : "-").toFixed(2)} Usd</p>
        <p>Suministro: {cripto.supply}</p>
        <p>Suministro máximo: {cripto.maxSupply ? cripto.maxSupply : "-"}</p>
        <p>
          Últimas 24Hrs: {parseFloat(cripto.changePercent24Hr).toFixed(2)} %
        </p>
      </div>
      <span className="info_rank">{cripto.rank}</span>
    </div>
  );
};

export default CriptoInfo;
