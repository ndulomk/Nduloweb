import { useEffect, useRef, useState } from "react"
import { BiHome, BiListUl, BiSearch } from "react-icons/bi"
import { BsBellFill, BsCartCheck, BsStarFill } from "react-icons/bs"
import { IoWatch } from "react-icons/io5"
import { MdAccountBox } from "react-icons/md"
import { movies } from "./Object"


const Kenai = () => {
  const [showsearch, setshowsearch] = useState(false)
  const [search, setSearch] = useState("")
  const [searchData, setSearchData] = useState([])
  const [dropdow, setDropDown] = useState(false)
  useEffect(()=>{
    let filter = movies 
    if(movies !== ""){
      filter = filter.filter(item=>(item.nome.toLowerCase().includes(search.toLowerCase())))
      setSearchData(filter)
    }

  }, [search])
  const myUl= useRef(null)
  const bi = useRef(null)
  useEffect(()=>{
    const drop = document.getElementById("ul")
    const show = document.getElementById("bi")
    setInterval(() => {
      if(window.screen.width <= 500){
        show.classList.remove("hidden")
        drop.classList.add("hidden")
        
      }
      else{
        drop.classList.remove("hidden")
        show.classList.add("hidden")
      }
    }, 1000);

    
  }, [])
  return (
    <div className="text-white bg-cover pb-[100px] h-[849px] max-[1000px]:h-[1200px] max-[570px]:h-[1800px] max-[410px]:h-[1400px] pt-[10px]" style={{backgroundImage:"url('/kenai1 (1).png')"}}>
      <div>
        <div>
          
        </div>
      </div>
      <nav className="flex justify-between items-center px-[4%] py-2 font-[600] mb-[40px]">
        <div className="text-[19px] font-bold">Kenai</div>
        <div className="hidden" ref={bi} id="bi">
          <BiListUl size={30} onClick={()=>setDropDown(!dropdow)}/>
        </div>
{/* mine */}
        {dropdow&&<div className="fixed top-[0] p-5 h-full bg-[#330f3d] right-0 items-center justify-end">
          <BiListUl size={25} onClick={()=>setDropDown(!dropdow)}/>
          <div className={showsearch? "flex items-center h-[40px] my-[10px] border-[1px] border-[#8080807c] rounded-[5px]":"flex items-center"}>
            <BiSearch className="my-5" onClick={()=>setshowsearch(!showsearch)} size={24}/>
            {showsearch&&<input  className="bg-[#80808000] w-[70px]" placeholder="search" onChange={(e)=>setSearch(e.target.value)}/>}
          </div>
          <ul className=" text-[24px] ">
            <li><BiHome/></li>
            <li className="my-5"><BsCartCheck/></li>
            <li className="my-5"><BsBellFill/></li>
            <li><MdAccountBox/></li> 
          </ul>
        </div>}


{/* fimm */}
        {<div className="flex gap-[10px]" ref={myUl} id="ul">
          <div className={showsearch? "flex items-center border-[1px] border-[#8080807c] rounded-[5px]":"flex items-center"}>
            <BiSearch onClick={()=>setshowsearch(!showsearch)}/>
            {showsearch&&<input  className="bg-[#80808000]" placeholder="search" onChange={(e)=>setSearch(e.target.value)}/>}
          </div>
          <ul className="flex gap-[10px] items-center">
            <li>Inicio</li>
            <li>Minha lista</li>
            <li><BsBellFill/></li>
            <li><MdAccountBox/></li>
          </ul>
        </div>}
      </nav>
      <section className="px-[10%]">
        <div>
          <p className="mb-[10px] bg-[#191818] text-[#ffa634] w-[140px] font-[600] text-[14px]">Action/Adventure</p>
          <div className="flex items-center gap-[10px] mb-[20px]">
            <div className="text-[gold] flex items-center gap-[4px]">
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
            </div>
            <IoWatch/>
            <span>1h 57m</span>
          </div>
          <div className="mb-[60px]">
            <h1 className="font-bold text-[25px] mb-[10px]">Batman</h1>
            <p className="w-[40%] mb-[20px] max-[800px]:w-[60%] max-[500px]:w-[80%] max-[360px]:w-[100%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quis hic facilis ipsam earum veritatis modi voluptate ratione possimus nobis quisquam aperiam, error accusantium necessitatibus porro dolorem eum exercitationem commodi.</p>
            <button className="bg-[#ffa634] px-2 py-1 font-bold text-[black] rounded-[5px] text-[14px] max-[1000px]:w-[40%] max-[600px]:w-[65%]">Assistir Agora</button>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-5 gap-[10px] px-[10%] max-[1000px]:grid-cols-4 max-[800px]:grid-cols-3 max-[600px]:grid-cols-2">
          {
            searchData.map((item, index)=>{

              return(
                <div key={index} className="cursor-pointer">
                  <img className="mb-[-80px]" src={item.nome === "Shang Chi"?"/kenai1 (2).png":item.nome === "Wish Dragon"?"/kenai1 (3).png":item.nome === "Loki"? "/kenai1 (4).png":item.nome === "Spider-man"?"/kenai1 (5).png":item.nome === "The Wicther"? "/kenai1 (6).png":<></>} alt="" />
                  <div className="px-2 pb-[15px]">
                    <p className="mb-[10px] bg-[#191818] text-[#ffa634] font-[600] text-[14px] max-[430px]:text-[55%] max-[260px]:text-[40%]">Action/Adventure</p>
                    <div className="max-[430px]:text-[85%]">
                      <div className="text-[gold] flex items-center gap-1">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                      </div>
                      <h1 className="font-bold text-[18px] max-[430px]:text-[100%]">{item.nome}</h1>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      <footer>

      </footer>
    </div>
  )
}

export default Kenai