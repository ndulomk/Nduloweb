import { useEffect, useState } from 'react'
import './css/home.css'
import Nav from './header/Nav'
import Market from './section/Market/Market'
import Overview from './section/Market/Overview'
import Top from './section/Market/Top'
import FII from './section/Market/FII'
import Footer from './footer/Footer'
import axios from 'axios'
// import Toptable from './section/Market/Toptable'
const Services =()=>{
    const [pesquisar, setPesquisar] = useState('')
    const [darkmode, setDarkmode]=useState(false)
    const[database, setDatabase] = useState([])
  
    useEffect(()=>{
        const getUser= async()=>{
            try {
                const resposta = await axios.get('http://localhost:3001/getcripto')
                console.log(resposta.data)
                setDatabase(resposta.data.rows)
            } catch (error) {
                console.log(error)
            }
           
        }
        getUser()
    },[])
    return(
        <div className={darkmode ?'home':'dark'}>
            <Nav darkmode={darkmode} setDarkmode={setDarkmode}/>
            <Market/>
            <Overview item={database}/>
            <Top db={database} pesquisar={pesquisar} setPesquisar={setPesquisar} />
            <FII pesquisar={pesquisar} setPesquisar={pesquisar}/>
            <Footer/>
        
            
        </div>
    )

}
export default Services