import { useState } from "react"
import Nav from "./header/Nav"
import './css/home.css'
import Addbitcoin from "./BNB/Addbitcoin"
import './css/section.css'
import Admin from "./BNB/Admin"
import Addfundo from "./BNB/Addfundo"
import Footer from "./footer/Footer"

const BNB =()=>{
    const [darkmode, setDarkmode]=useState(false)
    const [mudar, setMudar] = useState(false)
    return(
        <div className={darkmode ?'home hero':'dark hero'}>
            <Nav darkmode={darkmode} setDarkmode={setDarkmode}/>
             <Admin mudar={mudar} setMudar={setMudar}/>
            {
               mudar ?<Addbitcoin/> :<Addfundo/>
            }
            <Footer/>
        </div>
    )
    
}
export default BNB