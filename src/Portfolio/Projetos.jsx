import { useSelector } from "react-redux"
import { object } from "./myobject"
import { selectboolean } from "../Redux/BooleanSlice"
import { useNavigate } from "react-router-dom"

const Projetos = ()=>{
  const {boolean} = useSelector(selectboolean)
  const navigate = useNavigate()
    return(
        <div className="max-[650px]:mt-[40%] max-[624px]:mt-[500px] ">
            <h1 className={boolean ?"text-[#4b4edf] font-bold text-[25px] text-center" :"text-[#97edaa] font-bold text-[25px] text-center"}>Projectos</h1>
            <div className="grid grid-cols-3 gap-5 px-[5%] pt-[20px] mb-[60px] max-[1170px]:grid-cols-2 max-[870px]:grid-cols-1 max-[870px]:px-[15%] max-[1170px]:px-[10%]">
              {
                object.map((item, index)=>{
                  const sendto=()=>{
                    if(item.nome === "Codelab"){
                      navigate("/first")
                      window.location.reload()
                    }
                    else if(item.nome === "Login"){
                      navigate("/Login")
                      window.location.reload()
                    }
                    else if(item.nome === "Blog"){
                      navigate("/Three")
                      window.location.reload()
                    }
                    else if(item.nome === "Jordanshoes"){
                      navigate("/Jordan")
                      window.location.reload()
                    }
                    else if(item.nome === "Gameofmemory"){
                      navigate("/Game")
                      window.location.reload()
                    }
                    else if(item.nome === "Tailwindcopy"){
                      navigate("/tailwind")
                      window.location.reload()
                    }
                    else if(item.nome === "LaPizza"){
                      navigate("/pizza")
                      window.location.reload()
                    }
                  }

                  return(
                    <div key={index} className="mb-[40px] max-[330px]:mb-[80px]">
                      <img src={item.nome === "Codelab" ? "/first.png":item.nome === "Jordanshoes"?"/jordan.png":item.nome === "Login"?"/login.png":item.nome === "Blog"? "/Three.png":item.nome === "LaPizza"?"/pizza.png":item.nome === "Gameofmemory"?"/memory.png":item.nome === "Tailwindcopy"?"/tailwind.png":<></>} alt="ee" className="h-[65%] w-[100%] rounded-[4px] max-[495px]:h-[55%]"/>
                      <div className="pt-2">
                        <h1 className="font-bold text-[19px]">{item.nome}</h1>
                        <p className={boolean ? "text-[#4b4edf] font-[500]":"text-[#97edaa] font-[500]"}>{item.info}</p>
                        <div className="flex gap-[20px] mt-[20px] ">
                          <button onClick={sendto} className={boolean ? "px-[5px] py-1 text-white bg-[#4b4edf] rounded-[4px] font-[600] hover:bg-[#26276c] transition-[0.5s]":"px-[5px] py-1 text-black bg-[#97edaa] rounded-[4px] font-[600] hover:bg-[#466a4e] transition-[0.5s] max-[870px]:px-[10%] max-[750px]:px-[7%] max-[620px]:px-[3%] max-[520px]:py-[1%]"}>Acessar o Projecto</button>
                          <button className={boolean ?"px-[5px] py-1 border-[1px] border-[#4b4edf] rounded-[4px] font-[600] text-[#4b4edf] hover:bg-[#282970] hover:text-[white] transition-[0.5s]" :"px-[5px] py-1 border-[1px] border-[#97edaa] rounded-[4px] font-[600] text-[#97edaa] hover:bg-[#97edaa61] hover:text-[white] transition-[0.5s] max-[870px]:px-[10%] max-[750px]:px-[7%] max-[620px]:px-[3%] max-[520px]:py-[1%]"}>Acessar repositório</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    )

}
export default Projetos
