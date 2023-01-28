const CriptoTable = ({ history }) => {
  // Últimas 100 entradas en orden de la más actualizada a la más desactualizada
  const shortHistory = history.slice(-100).reverse();

  console.log(shortHistory);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {shortHistory.map((el) => {
          return (
            <tr>
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
