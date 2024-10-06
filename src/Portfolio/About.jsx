import { BsInstagram, BsTwitterX } from "react-icons/bs"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { useSelector } from "react-redux"
import { selectboolean } from "../Redux/BooleanSlice"

const About = ()=>{
  const send = ()=>{
    window.open("https://github.com/settings/profile")
  }
  const {boolean} = useSelector(selectboolean)
  console.log(boolean)
    return(
      
        <div className="px-[5%] pt-[20px] pb-[40px] h-[400px] max-[680px]:mb-[200px]" style={{backgroundImage:"url('/src/assets/back.png')"}}>
            <h1 className={boolean ? "font-bold text-[#4b4edf] text-[25px] text-center mb-[20px]":"font-bold text-[#97edaa] text-[25px] text-center mb-[20px]"}>Sobre mim</h1>

            <div className="text-center font-[500]  flex justify-center">
              <p className="w-[50%]">My name is Edgar Manuel Janota, im atually in internship on startup Softwise, i develop modern interfaces and of high quality, focus on perfomance, animations, responsivity and beauty</p>
            </div>
            <div className="flex items-center justify-center text-center gap-[20px] mt-[20px] max-[680px]:flex-col">
              <div className="flex flex-col items-center justify-center text-[19px] font-[600]">
                <div className={boolean? "bg-[#1234] p-2 rounded-[15px] cursor-pointer":"bg-[#1f1f1f] p-2 rounded-[15px] cursor-pointer"} onClick={send}>
                  <BsTwitterX className=""/>
                
                </div>
                <p>@eddiendulo</p>  
              </div>
              <div  className="flex flex-col items-center justify-center text-[19px] font-[600]">
                <div className={boolean? "bg-[#1234] p-2 rounded-[15px] cursor-pointer":"bg-[#1f1f1f] p-2 rounded-[15px] cursor-pointer" }onClick={send}>
                  <MdEmail className=""/>
                </div>
                <p>eddiendulo@gmail.com</p>
              </div>
              <div className="flex flex-col items-center justify-center text-[19px] font-[600]">
                <div className={boolean? "bg-[#1234] p-2 rounded-[15px] cursor-pointer":"bg-[#1f1f1f] p-2 rounded-[15px] cursor-pointer"} onClick={send}>
                    <BsInstagram className=""/>  
                </div>
            
                <p>madkiddulo</p>
              </div>
              <div className="flex flex-col items-center justify-center text-[19px] font-[600]">
                <div className={boolean? "bg-[#1234] p-2 rounded-[15px] cursor-pointer":"bg-[#1f1f1f] p-2 rounded-[15px] cursor-pointer"} onClick={send}>
                 <FaPhoneAlt className=""/>  
                </div>
               
                +244 945001546
              </div>
            </div>
        </div>
    )

}
export default About
