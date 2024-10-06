import { useState } from "react"
import Nav from "./header/Nav"
import './css/header.css'
import './css/home.css'
import Crypto from "./section/Buy/Crypto"
import Footer from './footer/Footer'
const Buy =()=>{

    const [darkmode, setDarkmode]=useState(false)
    return(
        <div className={darkmode ?'home':'dark'}>
            <Nav darkmode={darkmode} setDarkmode={setDarkmode}/> 
            <Crypto/> 
            <Footer/>

        </div>
    )
}
export default Buy