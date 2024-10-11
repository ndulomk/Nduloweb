import Reloadpage from "../Portfolio/Reloadpage"
import { Objdog } from "./Objectdog"

const Dog = () => {
  return (
    <div className="w-full py-5">
      <Reloadpage/>
      <div className="flex items-center px-[2%] max-[800px]:justify-center">
        <div className="basis-[50%] flex justify-end max-[800px]:items-center">
          <div className="">
            <div className="max-[800px]:flex max-[800px]:justify-center max-[800px]:items-center">
              <img src="/doglogo.svg" alt="ee" className="mb-[60px] "/>
            </div>

            <div className="w-[300px] max-[800px]:text-center">
              <h1 className="font-bold text-[20px]">Ajude quem realmente precisa da sua ajuda</h1>
              <p className="font-[500]">Com apenas 500kz você pode me ajudar a alimentar cães das ruas</p>
              <div className="max-[800px]:flex max-[800px]:justify-center max-[800px]:items-center">
                <button className="bg-[#124c5f] text-white p-2 rounded-[5px] text-[14px] font-bold">Ajudar Agora</button>
              </div>

          </div>
          </div>
        </div>
        <div className="max-[800px]:hidden">
          <img src="/dog-1.png" alt=""/>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center bg-[#bad8eb30] px-[2%] max-[800px]:grid-cols-1 max-[800px]:place-items-center">
        <div className="basis-[50%] max-[800px]:flex max-[800px]:items-center max-[800px]:justify-center"> 
          <img src="/dog-2.png" alt="" className="max-[800px]:w-[80%]"/>
        </div>
        <div className="w-[60%] basis-[30%] max-[800px]:text-center">
          <h1 className="font-bold text-[20px]">The dogs can talk, but only for people who know how to ear</h1>
          <p className="font-[500]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium voluptates pariatur reprehenderit repellat accusamus autem! Ut excepturi harum tempore, corporis eius porro quae, minus assumenda dolor laboriosam beatae commodi labore?</p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-[40px] place-items-center px-[8%] max-[800px]:grid-cols-1">
          {Objdog.map((item, index)=>{
            return(
              <div key={index} className="max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center">
                <img className="w-[70%] mb-[20px]" src={item.id === 0?"/dog-3.png":item.id === 1?"/dog-4.png":item.id === 2?"/dog-5.png":<></>} alt="" />
                <div>
                  <h1 className="font-bold text-[20px]">{item.nome}</h1>
                  <p className={item.nome ==="Biscrok"?"mb-[8px]" : "font-[500]"}>{item.info}</p>
                  <button className="bg-[#124c5f] w-[100%] text-[white] font-bold py-1 text-[14px] rounded-[5px] hover:bg-[#09252f] transition-[0.5s]">Comprar</button>
                </div>
            </div>
            )
          })

          }

        </div>
      </div>
    </div>
  )
}

export default Dog