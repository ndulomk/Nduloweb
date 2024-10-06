import { useEffect, useState } from 'react'
import './css/form.css'
import Formcad from './Form/Formcad'
import Navform from './Form/Navform'
import Formlog from './Form/Formlog'
import axios from 'axios'
const Cadastro = ()=>{
    const [login, setLogin] = useState(false)
    const [database, setDatabase] = useState([])
    useEffect(()=>{
        const getUser =async()=>{
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
        <div className='cad'>
            <Navform/>
            {
                login ?
                <Formcad login={login} setLogin={setLogin}/>:
                <Formlog login={login} setLogin={setLogin} database={database}/>
            }
        </div>
    )

}
export default Cadastro