import { useDispatch, useSelector } from "react-redux"
import About from "./About"
import Dashbody from "./Dashbody"
import Footer from "./Footer"
import Projetos from "./Projetos"
import Services from "./Services"
import Skills from "./Skills"
import { selectnome} from "../Redux/valuesSlice"
import { useEffect, useState } from "react"
import { selectboolean, setboolean} from "../Redux/BooleanSlice"
import First from "../First/First"
import Jordan from "../second/Jordan"
import Three from "../Three/Three"
import Game from "../game/Game"
import Dashboard from "../tailwind/Dashboard"
import Pizza from "../Pizza/Pizza"
import Login from "../Login/Login"
import { Analytics } from "@vercel/analytics/react"
const Home = ()=>{
  const {nome} = useSelector(selectnome)
  const [darkmode, setDarkmode] = useState(false)
  const dispatch = useDispatch()


  const {boolean} = useSelector(selectboolean)


 useEffect(()=>{
 
 },[nome]) 
    if(nome === "Start"){
      window.scrollTo(0, 0)
    }
    else if(nome === "About"){
      window.scrollTo(500, 500)
    }
    else if(nome === "Projects"){
      window.scrollTo(900, 900)
    }
    else if(nome === "Services"){
      window.scrollTo(1600, 1600)
    }
    else if(nome === "Skills"){
      window.scrollTo(1900, 1900)
    }
  
  const [Menu, setMenu] = useState("Start")
    return(
      <>
  
        {Menu === "Start"&&<div className={darkmode ?"bg-[#fdfdff] text-[black] transition-[1s]" :"bg-[#0b0b0b] transition-[1s] text-[#fff]"}>
        <Analytics />
          <Dashbody darkmode={darkmode} setDarkmode={setDarkmode}/>
          <About/>
          <Projetos setMenu={setMenu}/>
          <Services/>
          <Skills/>
          <Footer/>
        </div>}
        {Menu === "Codelab" && <First/>}
        {Menu === "Login" && <Login/>}
        {Menu === "Blog"&& <Three/> }
        {Menu === "Jordanshoes" && <Jordan/>}
        {Menu === "Gameofmemory" &&<Game/>}
        {Menu === "Tailwindcopy" &&<Dashboard/>}
        {Menu === "LaPizza" && <Pizza/>}
      </>
    )

}
export default Home
