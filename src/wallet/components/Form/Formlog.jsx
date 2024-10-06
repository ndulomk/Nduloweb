import { useState } from 'react'
import '../css/login.css'

const Formlog = ({login, setLogin, database})=>{
    
    const [nomelog, setNomelog] = useState('')
    const [senhalog, setSenhalog] = useState('')
    const tryto = ()=>{
        for(let pos in database){
            if(nomelog === database.nome){
                console.log(database.nome)
            }
            else{
                console.log(database.nome)
            }
        }

    }
    const carregar =(e)=>{
        e.preventDefault()
    }
    return(
        <>
                {/* { 
                    database.map(((item, index)=>(
                        nomelog === item.nome ? console.log('existe'):console.log('nao existe') 
                    )))  
                } */}
            <div className='formulario2'>
                <form className='form2'>
                    <span className='title'>Fazer Login</span>
                    <input type="text" className='inputcad' placeholder="Insira o seu nome" onChange={(e)=>setNomelog(e.target.value)}/>
                    <input type="email" className='inputcad' placeholder="Insira a sua senha" onChange={(e)=>setSenhalog(e.target.value)}/>
                    <input type='button' className='btnEntrar2' onClick={tryto} value={'Login'}/>
                </form>
                <div className='textLogin'>
                    <span className='title'>Dont have an account Sign in</span>
                    <span className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maiores suscipit quis labore quia,?</span>
                    <button className='btnCadastrar' onClick={()=>setLogin(!login)}>Cadastrar</button>
                </div>
            </div>
        </>

    )
}
export default Formlog