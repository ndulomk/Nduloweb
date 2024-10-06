import { BiHeart } from "react-icons/bi"
import { Code } from "./Myobject"
import { useEffect, useState } from "react"
import { BsHeartFill } from "react-icons/bs"

const Home = ()=>{
    const [selectid, setselectid] = useState(0)
    const [search, setSearch] = useState("")
    const [searchData, setsearchData] = useState([])
    useEffect(()=>{
        let filter = Code
        if(Code !== ""){
            filter = filter.filter(item=>item.h1.toLowerCase().includes(search.toLowerCase()))
            setsearchData(filter)
        }

    },[search])
    const pegar =(id)=>{
        setselectid(id)
    }
    return(
        <div className="">
            <nav className="bg-[#18181b] grid place-items-center px-[2%] py-[10px]">
                <div className="font-medium text-[white] text-3xl mb-[20px]"><span className="text-[#E07B67]">Code</span>Lab</div>

                <input className="w-[79%] bg-[#44444c91] p-2 rounded-[5px] mb-[20px]" type="text" placeholder="Pesquise no blog" onChange={(e)=>setSearch(e.target.value)}/>
            </nav>
            <section className="bg-[#121214] text-[#fff] px-[12%] pt-[40px] pb-[20px] overflow-y-auto h-[100vh]">
                {
                    searchData.map((item, index)=>{

                        return(
                            <div key={index} className={selectid === item.id ?"border-[2px] border-[#E07B67] rounded-[5px] bg-[#25252939] p-4 mb-[20px]" :"border-[2px] border-[#80808029] rounded-[5px] bg-[#25252939] p-4 mb-[20px]"}>
                                <div className="flex justify-between items-center text-[#E07B67] font-600 text-[14px]">
                                    <span>{item.span}</span>
                                    <span>{selectid === item.id ?<BsHeartFill color="#E07B67"/> :<BiHeart className="cursor-pointer" size={20} onClick={()=>pegar(item.id)}/>}</span>
                                </div>
                                <h1 className="text-[19px] font-bold">{item.h1}</h1>
                                <p className="mt-[10px] text-[#b0b0b0] font-[600]">{item.p}</p>
                            </div>
                        )
                    })
                }
            </section>

        </div>
    )

}
export default Home
