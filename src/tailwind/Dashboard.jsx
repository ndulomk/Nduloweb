import { BiDownArrowAlt, BiSearch } from "react-icons/bi"
import { BsGithub, BsMoonFill } from "react-icons/bs"
import "../App.css"
import { RiTailwindCssFill } from "react-icons/ri"
import Sidebar from "./Sidebar"
import Reloadpage from "../Portfolio/Reloadpage"
const Dashboard = ()=>{
    return(
      <div className="app text-[#fff] font-bold bg-[radial-gradient(#193350,#0f172a,#0f172a)] h-[658px] ">
        <Reloadpage/>
        {/* bg-[radial-gradient #193350,#0f172a)] */}
          <nav className="flex px-[2%] py-[10px] justify-between items-center border-b-[1px] border-[#54565e26] max-[1160px]:flex-col">
              <div className="flex items-center justify-center max-[675px]:flex-col">
                  <RiTailwindCssFill className="text-[24px]" color="#2982af"/>
                  <div className="flex items-center text-[#5a6981]">
                      <h1 className="text-[19px] text-[#fff] font-bold">tailwindcss</h1>
                        
                      <div className="flex items-center font-bold text-[14px] rounded-[15px] bg-[#212146cd] mx-[10px] py-1 px-2 text-[#7f7f90]">v3.6.11 <BiDownArrowAlt/></div>
                  </div>
                  <button className="bg-[#142a41] max-[380px]:w-[70%] text-[#38bdf8] rounded-[15px] py-1 px-2 font-bold text-[14px]"><span>Introducing Catalyst - Amodern application UI kit for React</span></button>
              </div>
              <div className="flex max-[530px]:flex-col items-center">
             
                  <ul className="flex font-bold gap-[20px] text-[15px]">
                      <li className="cursor-pointer hover:text-[#747eb7] transition-[0.5s]">Docs</li>
                      <li className="cursor-pointer hover:text-[#747eb7] transition-[0.5s]">Components</li>
                      <li className="cursor-pointer hover:text-[#747eb7] transition-[0.5s]">Blog</li>
                      <li className="cursor-pointer hover:text-[#747eb7] transition-[0.5s]">ShowCase</li>
                  </ul>
                  <div className="flex items-center gap-[20px] ml-[80px] text-[#747eb7] text-[17px]">
                      <BsMoonFill/>
                      <BsGithub/>
                  </div>
              </div>
          </nav>
          <div className="flex">
            <Sidebar/>
              <div id="body" className="px-[4%] pt-[40px]">

                  <div>
                      <p className="text-[#38bdf8] text-[14px]">Installation</p>
                      <h1 className="text-[40px] font-[arial]">Get started with Tailwind CSS</h1>
                      <div className="text-[#999babdc]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora dolore animi, quaerat facilis cupiditate</p><p> perferendis quo, magnam praesentium soluta molestias unde, illo omnis a obcaecati .</p>
                        <p className="mt-[20px]">Its fast, flexible, and reliable - with zero runtime</p>

                      </div>

                  </div>
                  <div className="mt-[40px]">
                      <h2 className="text-[20px] mb-[20px]">Installation</h2>
                      <ul className="flex border-b-[1px] border-[#8080805b] pb-[10px] gap-[20px] mb-[20px]">
                          <li className="cursor-pointer">Talwind Cli</li>
                          <li className="cursor-pointer">Using PostCSS</li>
                          <li className="cursor-pointer">Framework Guides</li>
                          <li className="cursor-pointer">Play CDN</li>
                      </ul>
                      <div className="text-[#999babdc]">
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est sit ipsam at quaerat</p> <p>incidunt corrupti mollitia odit illo. Facilis nostrum quo eos debitis recusandae ab distinctio similique  </p>eligendi officia? distinctio similique eligendi officia?

                      </div>

                  </div>
              </div>
          </div>
      </div>
    )

}
export default Dashboard
