import { useSelector } from "react-redux"
import { selectboolean } from "../Redux/BooleanSlice"
import useCookie from "../useCookie"

const Footer = ()=>{
  const {boolean} = useSelector(selectboolean)
 

    return(
        <footer className={boolean ? "bg-[#ececf3] bottom-0 mt-[40px] flex justify-between px-[5%] py-[20px] font-[600]":"bg-[#1f1f1f] bottom-0 mt-[40px] flex justify-between px-[5%] py-[20px] font-[600]"}>
          <span>@2024-Edgar Manuel Janota</span>
          <span>Powered by </span>
        </footer>
    )

}
export default Footer
