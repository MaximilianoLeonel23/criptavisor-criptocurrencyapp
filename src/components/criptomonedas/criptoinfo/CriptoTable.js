const CriptoTable = ({ history }) => {
  // Últimas 100 entradas en orden de la más actualizada a la más desactualizada
  const shortHistory = history.slice(-100).reverse();

  console.log(shortHistory);
  return (
    <table className="table">
      <tr>
        <th>Date</th>
        <th>Price</th>
      </tr>
      {shortHistory.map((el) => {
        return (
          <tr>
            <td>{new Date(el.date).toDateString()}</td>
            <td>{parseFloat(el.priceUsd).toFixed(2)} Usd</td>
          </tr>
        );
      })}
    </table>
  );
};

/*



*/

export default CriptoTable;
