import '../../css/market.css'
import '../../css/section.css'
import Table from '../Market/Table'
import '../../css/buy.css'
import { useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
const Crypto = ()=>{
    const [money, setMoney] = useState(0)
    const [sell, setSell] = useState(0)
    const [select, setSelect] = useState(false)
    return(
        <div className="buy hero">
            <div className='textb'>
                <h1>Buy Crypto or Sell  <p>On wallet ao</p></h1>
                <Table/>
                

            </div>
            <div className='buyChild'>
                <div className='Childbuy'>
                    <button className={select ?'btnBuy2':'btnBuy'} onClick={()=>setSelect(!select)}>Buy</button>
                    <button className={select ?'btnMudar': 'btnBuy2'} onClick={()=>setSelect(!select)}>Sell</button>
                </div>
                <div className='buyElement'>
                    {
                        select ?
                        <input type="number" placeholder='8.26-30.000USD' className='inputsize' onChange={(e)=>setSell(e.target.value)}/>: <input type="number" placeholder='8.26-30.000' className='inputsize' onChange={(e)=>setMoney(e.target.value)}/>
                    }
                    <div className='display'>{select ? sell: money} <div><FaDollarSign color='green'/>USDT</div></div>
                    <button className='btnSell'>Verify And Buy</button>
                </div>
            </div>

        </div>
    )

}
export default Crypto