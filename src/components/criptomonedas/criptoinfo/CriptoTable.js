const CriptoTable = ({ history }) => {
  // Últimas 100 entradas en orden de la más actualizada a la más desactualizada
  const shortHistory = history.slice(-100).reverse();

  console.log(shortHistory);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        {shortHistory.map((el, i) => {
          return (
            <tr key={i}>
              <td>{new Date(el.date).toDateString()}</td>
              <td>{parseFloat(el.priceUsd).toFixed(2)} Usd</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

/*



*/

export default CriptoTable;
