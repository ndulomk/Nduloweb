import { BsMoonFill } from "react-icons/bs"
import { ImNotification } from "react-icons/im"
import { RiAccountBoxFill, RiLuggageDepositFill} from "react-icons/ri"
import '../css/header.css'
import { CiLogin } from "react-icons/ci"
import { PiSunFill } from "react-icons/pi"
import { useNavigate } from "react-router-dom"

const Nav =({darkmode, setDarkmode})=>{
    const navigate = useNavigate();
    return(
        <nav>
            <div className="brand">
                Wallet ao
            </div>
            <ul className="navbar">
                <li><a className={darkmode?'black':'change'} href="http://localhost:5173/wallet/">Home</a></li>
                <li><a className={darkmode?'black':'change'} href="http://localhost:5173/wallet/buy">Buy Crypto</a></li>
                <li><a className={darkmode?'black':'change'} href="http://localhost:5173/wallet/services">Services</a></li>
                <li><a className={darkmode?'black':'change'} href="home">Trade</a></li>
                <li><a className={darkmode?'black':'change'} href="http://localhost:5173/wallet/about">About</a></li>
            </ul>
            <div className="buttons">
                <button className="btnGold" onClick={()=>navigate('/wallet/services')}><RiLuggageDepositFill/> Deposit</button>
                <button onClick={()=>navigate('/wallet/BNB')} className={darkmode ?"btn": 'btnChange'}><RiAccountBoxFill size={15} color={darkmode ?'black':'white'}/></button>
                <button className={darkmode ?"btn": 'btnChange'}><ImNotification color={darkmode ?'black':'white'}/></button>
                <button className={darkmode ?"btn": 'btnChange'} onClick={()=> setDarkmode(!darkmode)}>{darkmode ?<BsMoonFill color={darkmode ?'black':'white'}/>:<PiSunFill color={darkmode ?'black':'white'} size={15}/>}</button>
                <button onClick={()=>navigate('/wallet/cadastro')} className={darkmode ?"btn": 'btnChange'}><CiLogin color={darkmode ?'black':'white'} size={15}/></button>
            </div>
        </nav>
    )

}
export default Nav