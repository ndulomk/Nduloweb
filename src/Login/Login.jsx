import { BsGoogle } from "react-icons/bs"
import Reloadpage from "../Portfolio/Reloadpage"
import { useState } from "react"

const Home = ()=>{
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState(0)
    return(
        <div className="flex w-full h-[658px]">
            <Reloadpage/>
            <div className="bg-[#1e9e6b40] w-[50%] justify-center flex items-center max-[600px]:hidden">
                <img src="/imageport.svg" alt="" className=""/>
            </div>
            <div className="flex items-center justify-center w-[50%] max-[600px]:w-full">
                <div>
                  <p className="font-[600] text-[14px]">Bem vindo de volta</p>
                  <p className="font-[600] text-[18px]">Do login in your account</p>
                  <form action="" className="flex flex-col">
                      <label htmlFor="email" className="text-[14px] font-[600] mb-1 mt-3">E-mail</label>
                      <input className="border-[1px] border-[#70686842] rounded-[4px] bg-[#71717d15] px-[2%] py-1 mb-[20px]" type="email" id="email" onChange={(e)=>setEmail(e.target.value)} placeholder="eddie@gmail.com"/>
                      <label className="text-[14px] font-[600] mb-1" htmlFor="senha">Senha</label>
                      <input onChange={(e)=>setSenha(e.target.value)} className="border-[1px] border-[#685d5d4b] rounded-[4px] bg-[#71717d15] px-[2%] py-1 mb-[5px]" type="password" id="senha" placeholder="039939393"/>
                      <div className="flex justify-between items-center text-[13px]">
                        <div className="flex items-center">
                          <input type="radio" name="" id="radio" />
                          <label htmlFor="radio">Lembrar senha</label>
                        </div>
 
                          <span className="text-[#1e9e6a] font-bold cursor-pointer">Esqueceu a sua senha</span>
                      </div>
                      <button className="bg-[#1e9e6a] text-[white] font-bold text-[14px] px-1 py-[7px] rounded-[3px] mb-[10px] mt-[10px] hover:bg-[#125b3e] transition-[0.5s]">Entrar na conta</button>
                      <button className="flex items-center bg-[black] text-white justify-center px-1 py-[7px] rounded-[3px] hover:bg-[#000000a3] transition"><BsGoogle/> or do login with google</button>

                      <div className="mt-[20px] text-[12px] text-center">dont have an account? <span className="text-[#1e9e6a] font-bold cursor-pointer">Cadastre-se</span></div>
                  </form>
                </div>

            </div>
        </div>
    )

}
export default Home
