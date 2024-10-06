import { useDispatch, useSelector } from "react-redux"
import About from "./About"
import Dashboard from "./Dashboard"
import Footer from "./Footer"
import Projetos from "./Projetos"
import Services from "./Services"
import Skills from "./Skills"
import { selectnome} from "../Redux/valuesSlice"
import { useEffect, useState } from "react"
import { selectboolean, setboolean} from "../Redux/BooleanSlice"

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
  
  
    return(
        <div className={darkmode ?"bg-[#fdfdff] text-[black] transition-[1s]" :"bg-[#0b0b0b] transition-[1s] text-[#fff]"}>
          <Dashboard darkmode={darkmode} setDarkmode={setDarkmode}/>
          <About/>
          <Projetos/>
          <Services/>
          <Skills/>
          <Footer/>
        </div>
    )

}
export default Home
