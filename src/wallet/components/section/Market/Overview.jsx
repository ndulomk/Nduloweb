
import '../../css/market.css'
import Table from "./Table"

const Overview =({cripto})=>{
    return(
        <div className="Over">
            <div className="overChild dFlex">
                <h1>Markets Overview</h1>
                <h1 className="gray">Trading Data</h1>
                <h1 className="gray">Opportunity</h1>
            </div>
            <div className='boxTable'>
                <Table cripto={cripto}/>
                <Table cripto={cripto}/>
                <Table cripto={cripto}/>
                <Table cripto={cripto}/>
            </div>
        </div>
    )
}
export default Overview