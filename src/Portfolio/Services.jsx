import { BiServer } from "react-icons/bi"
import { myServices } from "./myobject"
import { FiFigma } from "react-icons/fi"
import { CgSmartphone } from "react-icons/cg"
import { useSelector } from "react-redux"
import { selectboolean } from "../Redux/BooleanSlice"
import scrollreveal from "scrollreveal"
import { GrBusinessService } from "react-icons/gr"

const Services = ()=>{
  const {boolean} = useSelector(selectboolean)
  scrollreveal().reveal('.area4')
    return(
        <div className="px-[5%] py-[20px]">
            <h1 className={boolean ? "text-center text-[#4b4edf] font-bold text-[25px] mb-[20px]":"text-center text-[#97edaa] font-bold text-[25px] mb-[20px]"}>Services</h1>
            <div className="grid grid-cols-4 gap-[20px] max-[750px]:grid-cols-2 area4">
              {
                myServices.map((item, index)=>{

                  return(
                    <div key={index} className={boolean ? "bg-[#ececf3] h-[150px] border-[#80808038] border-[1px] rounded-[4px] p-2 border-b-[#4b4edf] border-b-[2px] flex flex-col items-start justify-center":"bg-[#1f1f1f] h-[150px] border-[#80808038] border-[1px] rounded-[4px] p-2 border-b-[#97edaa] border-b-[2px] flex flex-col items-start justify-center"}>
                      <div className={boolean ?"text-[#4b4edf] text-[25px] mb-[20px]" :"text-[#97edaa] text-[25px] mb-[20px]"}>
                        {item.id === 1 ? "< >" : item.id === 2 ? <GrBusinessService/>:item.id === 3 ? <BiServer/>: item.id === 4 ? <FiFigma/>:<></>}
                      </div>
                      <p className="font-[600] w-[4%]">{item.nome}</p>
                    </div>
                  )
                })
              }
            </div>
        </div>
    )

}
export default Services
