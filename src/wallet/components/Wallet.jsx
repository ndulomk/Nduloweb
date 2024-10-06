import { useEffect, useState } from 'react'
import './css/home.css'
import Nav from './header/Nav'
import Section from './section/Section'
import Services from './section/Services'
import About from './section/About'
import Collaborate from './section/Collaborate'
import Footer from './footer/Footer'
import axios from 'axios'
const Home =()=>{
    const [darkmode, setDarkmode] = useState(false)
    const [database, setDatabase] = useState([])
    
    useEffect(()=>{
        const getUser= async()=>{
            try {
                const resposta = await axios.get('http://localhost:3001/getusuario')
                console.log(resposta.data)
                setDatabase(resposta.data.rows)
            } catch (error) {
                console.log(error)
            }
           
        }
        getUser()
    },[])

    return(
        <div className={darkmode ? 'home':'dark' }>
            <Nav darkmode={darkmode} setDarkmode={setDarkmode}/>
            <Section database={database}/>
            <Services/>
            <About/>
            <Collaborate/>
            <Footer/>
        </div>
    )
}
export default Home