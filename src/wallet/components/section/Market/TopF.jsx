import axios from "axios"
import { FaSearchLocation } from "react-icons/fa"
import { FiDelete } from "react-icons/fi"


const TopF = ({arquivo})=>{
    const deletar = async(idfundo)=>{
        try {
            const deletar = await axios.delete(`http://localhost:3001/deletefundo/${idfundo}`)
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
                                <td className='dFle'>{item.fnome} <p className='gray'> {item.ftype}</p></td>
                                <td>${item.fprice}</td>
                                <td className='red'>-{item.fchange}%</td>
                                <td>${item.fvolume}B</td>
                                <td>${item.fcap}B</td>
                                <td><button className='btnNew'><FaSearchLocation/></button><button className='btnNew' onClick={()=>deletar(item.idfundo)}><FiDelete/></button></td>
                            </tr>
                        )))
                    )
            }
        </tbody>
    </table>
    )
}
export default TopF