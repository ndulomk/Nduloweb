import { DiCss3, DiHtml5, DiReact } from "react-icons/di"
import { FaJs } from "react-icons/fa"
import { SiExpress, SiSqlite, SiTailwindcss } from "react-icons/si"
import { useSelector } from "react-redux"
import { selectboolean } from "../Redux/BooleanSlice"


const Skills = ()=>{
  const {boolean} = useSelector(selectboolean)

    return(
        <div className="mt-[20px] px-[5%] mb-[100px] pb-[20px] area5">
          <h1 className={boolean ? "text-[#4b4edf] text-center font-bold text-[25px] mb-[20px]":"text-[#97edaa] text-center font-bold text-[25px] mb-[20px]"}>Skills</h1>
          <div className={boolean ? "flex text-[#4b4edf] text-[50px] justify-between max-[1000px]:grid max-[1000px]:grid-cols-3 max-[1000px]:gap-[20px] ":"flex text-[#97edaa] text-[50px] justify-between max-[1000px]:grid max-[1000px]:grid-cols-3 max-[1000px]:gap-[20px] "}>
            <div className={boolean ?"bg-[#ececf3] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]" :"bg-[#1f1f1f] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]"}>
              <DiHtml5/>
            </div>
            <div className={boolean ? "bg-[#ececf3] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]":"bg-[#1f1f1f] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]"}>
              <DiCss3/>
            </div>
            <div className={boolean ? "bg-[#ececf3] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]":"bg-[#1f1f1f] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]"}>
              <FaJs/>
            </div>
            <div className={boolean ? "bg-[#ececf3] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]":"bg-[#1f1f1f] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]"}>
              <SiTailwindcss/>
            </div>
            <div className={boolean ? "bg-[#ececf3] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]":"bg-[#1f1f1f] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]"}>
              <DiReact/>
            </div>
            <div className={boolean ? "bg-[#ececf3] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]":"bg-[#1f1f1f] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]"}>
              <SiExpress/>
            </div>
            <div className={boolean ? "bg-[#ececf3] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]":"bg-[#1f1f1f] px-[4%] py-[20px] rounded-[4px] border-[#80808038] border-[1px] hover:text-[60px] transition-[0.5s] cursor-pointer h-[100px] max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-[70px]"}>
              <SiSqlite/>
            </div>
          </div>

        </div>
    )

}
export default Skills
