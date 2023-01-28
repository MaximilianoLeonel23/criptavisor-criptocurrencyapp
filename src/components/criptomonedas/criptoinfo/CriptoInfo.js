const CriptoInfo = ({ cripto }) => {
  return (
    <div className="info_container">
      <span className="info_symbol">{cripto.symbol}</span>
      <h2 className="info_name">{cripto.name}</h2>
      <div className="info_info">
        <p>
          <span>Precio:</span>{" "}
          {parseFloat(cripto.priceUsd ? cripto.priceUsd : "-").toFixed(2)} Usd
        </p>
        <p>
          <span>Suministro:</span> {parseFloat(cripto.supply).toFixed(2)}
        </p>
        <p>
          <span>Suministro máximo:</span>{" "}
          {parseFloat(cripto.maxSupply ? cripto.maxSupply : "-").toFixed(2)}
        </p>
        <p>
          <span>Últimas 24Hrs:</span>{" "}
          {parseFloat(cripto.changePercent24Hr).toFixed(2)} %
        </p>
        <p>
          <span>Promedio total 24Hrs:</span>{" "}
          {parseFloat(cripto.vwap24Hr).toFixed(2)} Usd
        </p>
        <p>
          <span>Suministro por precio:</span>{" "}
          {parseFloat(cripto.marketCapUsd).toFixed(2)} Usd
        </p>
      </div>
      <span className="info_rank">{cripto.rank}</span>
    </div>
  );
};

export default CriptoInfo;
