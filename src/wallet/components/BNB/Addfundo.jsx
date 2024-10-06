import axios from "axios"
import { useState } from "react"
let Agora = new Date()
let Now = Agora.getFullYear()
// let Day = Agora.getDate()
// let month = Agora.getMonth()
// let atual = (`${Now}-${Day}-0${month + 1}`)
// 2024-08-21
const Addfundo = () =>{
    const [Year] = useState(Now) 
    let n = String(Year.valueOf())
    const [fnome, setFnome] = useState('')
    const [ftype, setFtype] = useState('')
    const [fprice, setFprice]=useState(0)
    const [fdate, setFdate] = useState(0)
    const [fchange, setFchange] = useState(0)
    const [fvolume, setFvolume] = useState(0)
    const [fcap, setFcap] = useState(0)
    const [fenter, setFenter] = useState('')
    const [finfo, setFinfo] = useState('')
    const sendto = async()=>{
        try {
            if(fnome === '' || ftype === '' || fenter === "" || finfo === '' || fprice === 0 || fdate === 0 || fvolume === 0 || fcap === 0 || fchange === 0){
                alert('faltam dados')
            }
            else{
                if(fprice === '' || fdate === "" || fvolume === '' || fcap === '' || fchange === ""){
                    alert('no values on the forms type number')
                }
                else if(fdate[3] > n[3]){
                    alert('Ainda estamos em 2024')
                }

                else{
                    const resposta = await axios.post('http://localhost:3001/setfundo', {fnome, ftype, fprice, fdate, fchange, fvolume, fcap, fenter, finfo})
                    console.log(resposta.data)
                }
            }

        } catch (error) {
            
        }
        // const carregar=(e)=>{
        //     e.preventDefault()
        // }
        // carregar()
    }
    return(
        <div className='add'> 
        <h1>Adicionar Fundo de investimento</h1>
            <div className='addChild'>
                <input className="inputadd" type="text" placeholder="Name of the FII" onChange={(e)=> setFnome(e.target.value)}/>
                <input className="inputadd" type="text" placeholder="type of the FII" onChange={(e)=> setFtype(e.target.value)}/>
                <input className="inputadd" type="number" placeholder="price of the FII" onChange={(e)=>setFprice(e.target.value)}/>
                <input className="inputadd" type="date" placeholder="date of creation" onChange={(e)=>setFdate(e.target.value)}/>
            </div>
            <div>
                <input className="inputadd" type="number"  placeholder="Change on 24hour" onChange={(e)=>setFchange(e.target.value)}/>
                <input className="inputadd" type="number" placeholder="Volume" onChange={(e)=>setFvolume(e.target.value)}/>
                <input className="inputadd" type="number" placeholder="market cap" onChange={(e)=>setFcap(e.target.value)}/>
                <input className="inputadd" type="text" placeholder="empresa responsavel" onChange={(e)=> setFenter(e.target.value)}/>
            </div>
            <div>
                <textarea className="inputaddinfo" type="text"  placeholder="information about token" onChange={(e)=> setFinfo(e.target.value)}/>
            </div>
            <div className='buttons'>
                <input type="button" className="btninfo" value={'Salvar produto'} onClick={sendto}/>
                <input type="button" className="btninfo" value={'Cancelar'}/>

            </div>

        </div>
    )
}
export default Addfundo