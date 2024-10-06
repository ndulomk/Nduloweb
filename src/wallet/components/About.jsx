import { useState } from "react"
import Nav from "./header/Nav"
import './css/home.css'
import Aboutpage from "./section/About/Aboutpage"
import Created from "./section/About/Created"
import Footer from "./footer/Footer"

const About =()=>{
    const [darkmode, setDarkmode]=useState(false)
    return(
        <div className={darkmode ? 'home':'dark' }>
            <Nav darkmode={darkmode} setDarkmode={setDarkmode}/>
            <Aboutpage/>
            <Created/>
            <Footer/>
        </div>
    )

}
export default About 