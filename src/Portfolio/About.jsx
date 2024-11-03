import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { useSelector } from "react-redux"
import { selectboolean } from "../Redux/BooleanSlice"


const About = ()=>{
  const send = (n)=>{
    if(n === 1){
      window.open("https://www.linkedin.com/in/edgar-manuel-janota-387329328/")
    }
    else if(n=== 0){
      window.open("https://github.com/settings/profile")
    }

  }
  const {boolean} = useSelector(selectboolean)
  console.log(boolean)
    return(
      
        <div className="px-[5%] pt-[20px] pb-[40px] h-[400px] max-[680px]:mb-[10px] area2" style={{backgroundImage:"url('/src/assets/back.png')"}}>
            <h1 className={boolean ? "font-bold text-[#4b4edf] text-[25px] text-center mb-[20px]":"font-bold text-[#97edaa] text-[25px] text-center mb-[20px]"}>About me</h1>

            <div className="text-center font-[500]  flex justify-center">
              <p className="w-[50%] max-[620px]:w-full">My name is Edgar Manuel Janota, im atually in internship on startup Softwise, i develop modern interfaces and of high quality, focus on perfomance, animations, responsivity and beauty</p>
            </div>
            <div className="flex items-center justify-center text-center gap-[20px] mt-[20px] max-[680px]:flex-col">
             
              <div className="flex flex-col items-center justify-center text-[19px] font-[600]">
                <div className={boolean? "bg-[#1234] p-2 rounded-[15px] cursor-pointer":"bg-[#1f1f1f] p-2 rounded-[15px] cursor-pointer"} onClick={()=>send(0)}>
                  <BsGithub className=""/>
                
                </div>
                <p>@eddiendulo</p>  
              </div>
              <div  className="flex flex-col items-center justify-center text-[19px] font-[600]">
                <div className={boolean? "bg-[#1234] p-2 rounded-[15px]":"bg-[#1f1f1f] p-2 rounded-[15px]" }>
                  <MdEmail className=""/>
                </div>
                <p>eddiendulo@gmail.com</p>
              </div>
              <div className="flex flex-col items-center justify-center text-[19px] font-[600]">
                <div className={boolean? "bg-[#1234] p-2 rounded-[15px] cursor-pointer":"bg-[#1f1f1f] p-2 rounded-[15px] cursor-pointer"} onClick={()=>send(1)}>
                    <BsLinkedin className=""/>  
                </div>
            
                <p>madkiddulo</p>
              </div>

            </div>
        </div>
    )

}
export default About
