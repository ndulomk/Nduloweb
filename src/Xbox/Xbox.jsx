import { useState } from "react"
import { question } from "./object"
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi"
import Reloadpage from "../Portfolio/Reloadpage"

const Xbox = () => {
  const li = [
    {
      id:0,
      nome:"VISÃO GERAL"
    },
    {
      id:1,
      nome:"JOGOS"
    },
    {
      id:2,
      nome:"GALERIA"
    },
    {
      id:3,
      nome:"UNBOX"
    }
  ]
  const [idli, setIdLi] = useState(0)
  const [idans, setIdAns] = useState(10)
  return (
    <div className="bg-[#0d100c] text-[#fff] max-[800px]:h-full">
      <Reloadpage/>
      <nav className="flex items-center justify-between text-[14px] px-[10%] py-[20px] max-[800px]:flex-col">
        <div className="flex items-center gap-5 max-[800px]:flex-col">
          <img src="/xbox (6).png" alt="" className="w-[90px]"/>
          <ul className="flex gap-3 max-[390px]:text-[12px] max-[320px]:gap-2">
            {
              li.map((item, index)=>{
                const pegar =()=>{
                  setIdLi(item.id)
                }
                return(
                  <li className={idli === item.id? "cursor-pointer":"cursor-pointer"} onClick={pegar} key={index}>{item.nome}</li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <button className="bg-[#9bf00b] text-[black] font-bold text-[13px] p-1 rounded-[4px] max-[800px]:mt-[20px] ">VER DISPONIBILIDADE</button>
        </div>
      </nav>
      <section>
        <div>
          <h1 className="text-center text-[40px] font-bold font-[arial]">Xbox series X</h1>
          <p className="text-center text-[#9bf00b] font-bold text-[20px]">PEDIDO ANTECIPADO</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src="/xbox (7).png" alt="" className="w-[70%] "/>
        </div>

        <div className="flex items-center justify-between px-[20%] my-[60px] max-[750px]:flex-col max-[750px]:text-center">
          <div className="flex flex-col max-[750px]:mb-[20px]">
            <span className="text-[#9bf00b] text-[30px] font-bold">Desempenho</span>
            <span className=" text-[30px] font-bold">aperfeiçoado</span>
            <p className="text-[#888da8] w-[60%] font-[600] text-[14px] max-[750px]:w-full">the joystick wireless xbox bring one elegant design, comfy refined and instantly shared for one favorite like</p>
          </div>
          <div>
            <img src="/xbox (5).png" alt="" className="w-[100%]"/>
          </div>
        </div>

      </section>
      <section className="py-[20px]">
        <div className="grid grid-cols-4 max-[800px]:grid-cols-2 max-[800px]:gap-[20px] max-[800px]:px-[6%] max-[450px]:grid-cols-1">
          <img src="/xbox (1).png" alt="" />
          <img src="/xbox (2).png" alt="" />
          <img src="/xbox (3).png" alt="" />
          <img src="/xbox (4).png" alt="" />
        </div>
        <div className="font-[arial] px-[6%] py-[40px]">
          <div className="text-[25px] font-bold max-[800px]:text-center"><span className="text-[#9bf00b] ">Perguntas</span> frequentes</div>
          <div>
            {
              question.map((item, index)=>{
                const pegar=()=>{
                  setIdAns(item.id)
                }
                return(
                  <div key={index} className="border-b-[1px] border-[#2e2e2e] p-[15px]">
                    <div  className="flex items-center justify-between  mb-[10px] font-[600] cursor-pointer" onClick={pegar}>
                      <p>{item.nome}</p>
                     {item.id === idans?<BiUpArrowAlt color="#9bf00b"/> : <BiDownArrowAlt/>}
                    </div>
                   {item.id === idans&& <div className=" text-[#888da8] font-[500]">
                      {item.resposta}
                    </div>}
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <footer className="px-[6%] bottom-0 h-[90px] flex justify-between max-[400px]:flex-col max-[400px]:items-center ">
        <div className="mb-[5px]">   <img src="/xbox (6).png" alt="" className="w-[90px]"/></div>
        <div className="max-[297px]:text-center">Created by Edgar Manuel Janota</div>
      </footer>
    </div>
  )
}

export default Xbox