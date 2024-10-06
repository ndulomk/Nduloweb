import { BiSearch } from "react-icons/bi"

const Sidebar = ()=>{
    return(
        <div id="side" className="pl-[2%] py-[40px] overflow-y-auto max-h-[500px] max-w-[21%] w-full">
        <div className="flex bg-[#4343546d] px-3 w-[210px] items-center rounded-[5px] justify-center font-normal">
            <BiSearch size={20} className=" text-[#737793]"/>
            <input type="text" placeholder="Quick search" className="bg-[#67678200] w-full h-[30px]"/>
        </div>
        <div>
            <ul className="text-[15px] text-[#999babdc]">
                <li className="my-[10px]">Documentation</li>
                <li className="my-[10px]">Components</li>
                <li className="my-[10px]">Templates</li>
                <li className="my-[10px]">Screencasts</li>
                <li className="my-[10px]">Playground</li>
                <h1 className="text-[white]
                ">Getting Started</h1>
                <div className="px-[3%] border-l-[1px] border-[#8080804b]">
                  <li className="my-[10px]">Playground</li>
                  <li className="my-[10px]">Playground</li>
                  <li className="my-[10px]">Playground</li>
                  <li className="my-[10px]">Playground</li>
                  <li className="my-[10px]">Playground</li>
                  <li className="my-[10px]">Playground</li>

                </div>

            </ul>
        </div>
    </div>
    )

}
export default Sidebar
