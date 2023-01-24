import { Link } from "react-router-dom"

const CriptoUnit = ({id, name, price, symbol, rank}) => {

    

    return (
        <div className="cripto_card">
            <h4 className="cripto_card-title">Nombre: {name}</h4>
            <p>Symbol: {symbol}</p>
            <p>Price: {parseFloat(price).toFixed(2)} USD</p>
            <span className="cripto_card-rank">{rank}</span>
            <Link to={`/criptomonedas/${id}`}>Ver</Link>
        </div>
    )
}

export default CriptoUnit