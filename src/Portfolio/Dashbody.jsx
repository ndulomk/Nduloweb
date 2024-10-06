import { useDispatch, useSelector } from "react-redux"
import { Nav } from "./myobject"
import { setnome } from "../Redux/valuesSlice"
import { BsMoonFill, BsSunFill } from "react-icons/bs"
import { changeboolean, selectboolean, setboolean } from "../Redux/BooleanSlice"
import useCookie from "../useCookie"
import { FaListUl } from "react-icons/fa6"
import { useEffect, useRef, useState } from "react"
const Dashboard = ({darkmode, setDarkmode})=>{
  const dispatch = useDispatch()
  const pegar =(nome)=>{
    dispatch(setnome(nome))
    
  }
  const {boolean} = useSelector(selectboolean)

  const [darkvalue, setdarkvalue, darkvaluedelete] = useCookie("darkmode", null)
  const [openside, setOpenSide] = useState(false)

  const change=(n)=>{
    setDarkmode(!darkmode)
    console.log(n)
    if(n === 1){
      dispatch(setboolean(darkmode))
      setdarkvalue(true)
    }
    else if(n === 0){
      dispatch(changeboolean(boolean))
      setdarkvalue(false)
    }

  }
  const download =()=>{
    window.open("curriculo.pdf")
  }
  const drop = useRef(null)
  const fa = useRef(null)
  const [width, setWidth] =useState(0)
  useEffect(()=>{
    const myLi = document.getElementById("li")
    const myfa = document.getElementById("fa")


    setInterval(() => {
      setWidth(window.screen.width)
      if(window.screen.width <= 450){
        myLi.classList.add("hidden")
        myfa.classList.remove("hidden")
      }
      else if(window.screen.width >= 451){
        myfa.classList.add("hidden")
        myLi.classList.remove("hidden")
  
        
      }
    }, 1000);

  
    console.log(width)
   

    

  },[width])
    return(
        <div>
          {openside ?<div className="px-[5%] pt-4 absolute bg-[#130923] h-full text-[white]">
            <ul className="flex gap-[20px] font-[600] transition justify-center flex-col">
            <FaListUl size={30} onClick={()=>setOpenSide(!openside)} className="cursor-pointer"/>
                  {
                    Nav.map((item, index)=>{

                      return(
                        <li onClick={()=>pegar(item.nome)} key={index} className={boolean ?"cursor-pointer hover:bg-[#97aaed] p-1 rounded-[5px] hover:text-[black] tarnsition-[0.5s]":"cursor-pointer hover:bg-[#97edaa] p-1 rounded-[5px] hover:text-[black] tarnsition-[0.5s]"}>{item.nome === "moon"?<>{darkmode ? <BsMoonFill onClick={()=>change(0)}/>:<BsSunFill  onClick={()=>change(1)}/>}</>  :item.nome}</li>
                      )
                    })
                  }
                </ul>
          </div>:<></>}
          <div className={boolean ? "py-[20px] text-[#000]":"py-[20px] text-[#fff]"}>
            <nav className="flex justify-between items-center px-[5%] max-[455px]:items-start  max-[700px]:flex-col">
              <div className="max-[700px]:w-full flex items-center justify-center max-[700px]:mb-[20px] max-[450px]:flex max-[450px]:justify-around">
                <div ref={fa} id="fa">
                  <FaListUl  onClick={()=>setOpenSide(!openside)} size={30} className="cursor-pointer"/>
                </div>
                <div className={boolean ?"font-bold text-3xl cursor-pointer max-[450px]:text-center text-[#4b4edf] hover:opacity-[60%] "  :"font-bold text-3xl cursor-pointer text-[#97Edaa] hover:opacity-[60%]  max-[450px]:text-center"}>
                {"<Ndulo/>"}
                </div>
              </div>
              
              <ul ref={drop}  id="li" className="flex gap-[20px] font-[600] transition items-center justify-center">
                {
                  Nav.map((item, index)=>{

                    return(
                      <li  onClick={()=>pegar(item.nome)} key={index} className={boolean ?"cursor-pointer hover:bg-[#97aaed] p-1 rounded-[5px] hover:text-[black] tarnsition-[0.5s]":"cursor-pointer hover:bg-[#97edaa] p-1 rounded-[5px] hover:text-[black] tarnsition-[0.5s]"}>{item.nome === "moon"?<>{darkmode ? <BsMoonFill onClick={()=>change(0)}/>:<BsSunFill  onClick={()=>change(1)}/>}</>  :item.nome}</li>
                    )
                  })
                }


              </ul>
            </nav>
            <section className="flex items-center justify-between px-[5%] my-[80px] max-[960px]:flex-col-reverse ">
              <div className="text-[19px] max-[960px]:mt-[60px]">
                <p className="text-[16px] font-[590] mb-[10px] max-[960px]:text-center">Whats up bro, i{"'"}m</p>
                <h1 className={boolean ? "bg-[#4b4edf] text-black font-bold text-[25px] p-1 rounded-[3px] cursor-pointer hover:bg-[#97edaa] hover:text-[30px] transition-[0.5s] mb-[10px] max-[305px]:text-center":"bg-[#97edaa] text-black font-bold text-[25px] p-1 rounded-[3px] cursor-pointer hover:bg-[#97bced] hover:text-[30px] transition-[0.5s] mb-[10px] max-[305px]:text-center"}>Edgar Manuel Janota</h1>
                <p className="font-bold max-[960px]:text-center">Desenvolvedor Frontend</p>
                <div className="max-[960px]:flex max-[960px]:items-center max-[960px]:justify-center">
                  <button onClick={download} className="bg-[#97bced] text-[black] p-1 font-[600] rounded-[4px] mt-[20px]">Download CV</button>
                </div>
   
              </div>
              <div className="max-[960px]:flex max-[960px]:justify-center max-[960px]:items-center">
                <img src="/primary.svg" alt="" className="cursor-pointer hover:scale-110 hover:-rotate-2 duration-300 max-[960px]:w-[60%] "/>
              </div>
            </section>
        </div>
        </div>
    )

}
export default Dashboard
