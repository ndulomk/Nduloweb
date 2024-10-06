import { MarketO } from "../../object/MarketO"
import '../../css/market.css'

const Table =({cripto})=>{
    return(
        <table className="cardTable">
        <thead>
            <tr className="th">
                <th>Hot Coins</th>
                <th><button className="btnGold">More</button></th>
            </tr>
        </thead>
        <tbody>
            {
            MarketO.map(((item, index)=>(
                <tr key={index} className="th">
                    <td><img src="usd.png" alt="" />{item.nome}</td>
                    <td>${item.price}</td>
                    <td className="red">{item.status}%</td>
                </tr>
            )))

            }
        </tbody>
    </table>
    )

}
export default Table