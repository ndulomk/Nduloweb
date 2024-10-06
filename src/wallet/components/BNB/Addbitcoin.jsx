import { useState } from 'react'
import '../css/add.css'
import axios from 'axios'
let Agora = new Date()
let Now = Agora.getFullYear()
const Addbitcoin =()=>{
    const [Year] = useState(Now) 
    let n = String(Year.valueOf())
    const [bnome, setBnome] = useState('')
    const [btype, setBtype] = useState('')
    const [bprice, setBprice]=useState(0)
    const [bdate, setBdate] = useState(0)
    const [bchange, setBchange] = useState(0)
    const [bvolume, setBvolume] = useState(0)
    const [bcap, setBcap] = useState(0)
    const [benter, setBenter] = useState('')
    const [binfo, setBinfo] = useState('')
    const sendto=async()=>{
        try {
            if(bnome === '' || btype === '' || bprice === 0 || bchange === 0 || bvolume === 0 || bdate === 0 || bcap === 0|| benter === '' || binfo === '')
            {
                alert('Faltam dados!!')
            }
            else{
                if(bprice === '' || bchange === '' || bvolume === '' || bdate === ''|| bcap === ""){
                    alert('no values on forms type number')
                }
            
                else if(bdate[3] > n[3]){
                    alert('Ainda estamos em 2024')
                }
                else{
                    const resposta = await axios.post('http://localhost:3001/setcripto', {bnome, btype, bprice, bdate, bchange, bvolume, bcap, benter, binfo})
                    console.log(resposta.data)
                }

            }

        } catch (error) {
            console.log(error)
            
        }

    }
    // const carregar = (e)=>{
    //     e.preventDefault()
    // }
    // carregar()

    return( 
        <div className='add'> 
        <h1>Adicionar Criptomoeda</h1>
            <div className='addChild'>
                <input className="inputadd" type="text" placeholder="Name of the token" onChange={(e)=> setBnome(e.target.value)}/>
                <input className="inputadd" type="text" placeholder="type of the token" onChange={(e)=> setBtype(e.target.value)}/>
                <input className="inputadd" type="number" placeholder="price of the token" onChange={(e)=>setBprice(e.target.value)}/>
                <input className="inputadd" type="date" placeholder="date of creation" onChange={(e)=>setBdate(e.target.value)}/>
            </div>
            <div>
                <input className="inputadd" type="number"  placeholder="Change on 24hour" onChange={(e)=>setBchange(e.target.value)}/>
                <input className="inputadd" type="number" placeholder="Volume" onChange={(e)=>setBvolume(e.target.value)}/>
                <input className="inputadd" type="number" placeholder="market cap" onChange={(e)=>setBcap(e.target.value)}/>
                <input className="inputadd" type="text" placeholder="empresa responsavel" onChange={(e)=> setBenter(e.target.value)}/>
            </div>
            <div>
                <textarea className="inputaddinfo"  placeholder="information about token" onChange={(e)=> setBinfo(e.target.value)}/>
            </div>
            <div className='buttons'>
                <input type="button" className="btninfo" value={'Salvar produto'} onClick={sendto}/>
                <input type="button" className="btninfo" value={'Cancelar'}/>

            </div>

        </div>
    )

    

}
export default Addbitcoin