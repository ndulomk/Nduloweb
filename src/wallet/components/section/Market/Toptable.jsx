import { FaSearchLocation } from 'react-icons/fa'
// import { Allcoins } from '../../object/Allcoins'
import '../../css/market.css'
import axios from 'axios'
import { FiDelete } from 'react-icons/fi'

const Toptable = ({arquivo})=>{


    const deletar =async(idcripto)=>{
        try {
            const deletar = await axios.delete(`http://localhost:3001/deletecripto/${idcripto}`)
            console.log(deletar.data)
            window.location.reload(false)
        } catch (error) {
            console.log(error)
        }

    }
    

    return(
        <table className='toptable'>
            <thead>
                <tr className='tr2'>
                    <th>Name</th>
                    <th>Price</th>
                    <th><select className='select'><option value="24h">24h</option></select>Change</th>
                    <th>24h Volume</th>
                    <th>Market Cap</th>
                    <th>Actions</th>
                </tr>
            </thead>
             <tbody>
                { arquivo && (
                    
                            arquivo.map(((item, index)=>(
                                
                                <tr key={index} className='items'>
                                    <td className='dFle'>{item.bnome} <p className='gray'> {item.btype}</p></td>
                                    <td>${item.bprice}</td>
                                    <td className='red'>-{item.bchange}%</td>
                                    <td>${item.bvolume}B</td>
                                    <td>${item.bcap}B</td>
                                    <td><button className='btnNew'><FaSearchLocation/></button><button className='btnNew' onClick={()=>deletar(item.idcripto)}><FiDelete/></button></td>
                                </tr>
                            )))
                        )
                }
            </tbody>
        </table>
    )
}
export default Toptable