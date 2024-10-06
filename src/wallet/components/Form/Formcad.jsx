import { useState } from 'react'
import '../css/form.css'
import axios from 'axios'

const Formcad = ({login, setLogin})=>{
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [pais, setPais] = useState('')
    const [phone, setPhone] = useState(0)
    const [iban, setIban] = useState(0)
    const [nif, setNif] = useState(0)
    const [senha, setSenha] = useState('')
    const sendto =async()=>{
        try {
            if(nome === '' || email === ''|| pais === '' ||  senha === '' || phone === 0 || iban === 0 || nif === 0){
                alert('faltam dados')
            }
            else{
                if(phone === '' || iban === '' || nif === ''){
                    alert('not have values on this form')
                }
                else{
                    console.log(phone)
                    const resposta = await axios.post('http://localhost:3001/setusuario', {nome, email, pais, phone, iban, nif, senha})
                    console.log(resposta.data)
                    console.log(resposta.data.rows)
                }

            }

            
        } catch (error) {
            console.log(error)
        }

    }
    // const carregar=(e)=>{
    //     e.preventDefault()
    // }
    // carregar()
    return(
        <>
        <div className="mensagem">Cadastrado com sucesso</div>
            <div className='formulario'>
                <form className='form'>
                    <span className='title'>Cadastrar</span>
                    <input type="text" className='inputcad' placeholder="Insira o seu nome" onChange={(e)=>setNome(e.target.value)}/>
                    <input type="email" className='inputcad' placeholder="Insira o seu email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" className='inputcad' placeholder="Pais" onChange={(e)=>setPais(e.target.value)}/>
                    <input type="number" className='inputcad' placeholder="Number phone" maxLength={9} onChange={(e)=>setPhone(e.target.value)}/>
                    <input type="number" className='inputcad' placeholder='standard Bank' onChange={(e)=>setIban(e.target.value)}/>
                    <input type="number" className='inputcad' placeholder='NIF' onChange={(e)=>setNif(e.target.value)}/>
                    <input type="number" className='inputcad' placeholder='Senha' onChange={(e)=>setSenha(e.target.value)}/>
                    <input type='button' className='btnEntrar' onClick={sendto} value={'Cadastrar'}/>
                </form>
                <div className='textLogin'>
                    <span className='title'>Possui uma conta?</span>
                    <span className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maiores suscipit quis labore quia,?</span>
                    <button onClick={()=>setLogin(!login)} className='btnCadastrar'>Login</button>
                </div>
            </div>
        </>
)
}
export default Formcad