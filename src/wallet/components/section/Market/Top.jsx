import { BiSearch } from 'react-icons/bi'
import '../../css/market.css'
import { useEffect, useState } from 'react'
import Toptable from './Toptable'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"

const Top = ({db, pesquisar, setPesquisar})=>{
    const [ligado, setLigado] = useState(false)
    const [arquivo, setArquivo] = useState([]);
    const [showing, setShowing]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setShowing(false)
        }, 3000)
    }, [db])

    useEffect(()=>{
        let filtro = db
        if(pesquisar !== ''){
            filtro = filtro.filter(item =>(item.bnome.includes(pesquisar)))
        }
        setArquivo(filtro)
    }, [db, pesquisar])

    return(
        <div className='hero'>
            <div className='boxTable'>
                <h3>Favorites</h3>
                <h3>All Coins</h3>
                <h3>Spot/Margin Market</h3>
                <h3>Future Market</h3>
                <h3>New Listing</h3>
                <h3>Zones</h3>
                { ligado ?<input type="text" placeholder='Pesquise all coins' className='inputt'onChange={(e)=> setPesquisar(e.target.value)}/> :<button className='btn' onClick={()=> setLigado(!ligado)}><BiSearch/></button>}
            </div>
            <div className='boxGray'>
                <h1>Top Coins On the Market  Capitalization</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione incidunt vero porro? Temporibus eius vitae, molestias mollitia maiores id culpa at</p>
            </div>
            <div>
              {showing ? <Skeleton highlightColor='green' enableAnimation count={2}  height={100} style={{backgroundColor:"blue", marginTop:"30px"}}/>:  <Toptable item={db} pesquisar={pesquisar} arquivo={arquivo} setArquivo={setArquivo} />}
            </div>
        </div>
    )

}
export default Top