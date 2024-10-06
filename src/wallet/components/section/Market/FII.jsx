import Box from "../Box"
import '../../css/market.css'
import Toptable from "./Toptable"
import { useEffect, useState } from "react"
import axios from "axios"
import TopF from "./TopF"


const FII =()=>{
    // const [arquivo, setArquivo]= useState([])
    // const [ligado, setLigado] = useState(false)
    // const [pesquisar, setPesquisar] = useState('')
    const [fundo, setFundo] = useState([])
    useEffect(()=>{
        const getUser= async()=>{
            try {
                const resposta = await axios.get('http://localhost:3001/getFII')
                console.log(resposta.data)
                setFundo(resposta.data.rows)
            } catch (error) {
                console.log(error)
            }
           
        }
        getUser()
        },[])
    return(
        <div>

            <div className='boxGray'>
                <h1>Top FIIs On the Market  Capitalization</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione incidunt vero porro? Temporibus eius vitae, molestias mollitia maiores id culpa at</p>
            </div>
            <div className="hero">
                
                <div className="boxTable2">
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                </div>
                <div className="boxTable2">
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                </div>
            </div>
            <div>
                
                <TopF arquivo={fundo}/>
              
            </div>
        </div>
    )

}
export default FII