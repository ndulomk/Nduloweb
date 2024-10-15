import Reloadpage from "../Portfolio/Reloadpage"

const Spider = () => {
  return (
    <div className="bg-cover h-[700px] max-[1000px]:h-full text-[#fff]" style={{backgroundImage:"url('/spider (1).svg')"}}>
      <Reloadpage/>
      <nav className="flex justify-between px-[6%] py-[10px] items-center">
        <div><img src="/spider (2).svg" alt="" /></div>
        <ul className="flex gap-[20px] font-[600]">
          <li>Sinopse</li>
          <li>Elenco</li>
          <li>Fórum</li>
        </ul>
      </nav>
      <section className="flex items-center justify-center px-[2%] my-[130px] max-[1000px]:justify-between max-[630px]:flex-col-reverse">
          <div className="flex flex-col items-center justify-center max-[1000px]:items-start max-[630px]:items-center">
            <img src="/spider (1).png" alt="" />
            <p className="w-[40%] max-[1000px]:w-full max-[630px]:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit quidem repellendus quaerat sit! Quia, nobis unde vitae incidunt nulla magni eius fugit mollitia debitis error officiis rem quos repudiandae.</p>
            <button className="bg-[#bb1c1c] py-1 px-4 mt-[10px] rounded-[5px] text-[14px] font-[600] max-[1000px]:w-[80%]">Comprar Ingresso</button>
          </div>
        <img src="/spider (2).png" alt="" className="absolute  right-0 w-[40%] max-[1000px]:static max-[1000px]:w-[65%]"/>
      </section>
      <section className="px-[6%]">
        <div className="grid grid-cols-3 gap-[20px] max-[500px]:grid-cols-1">
          <div>
            <h1 className="font-bold text-[18px] text-center">Cinema</h1>
            <p className="text-center text-[15px] text-[#888da8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur ratione tempora architecto soluta aliquid, odit aut doloremque</p>
          </div>
          <div>
            <h1 className="font-bold text-[18px] text-center">Prêmios</h1>
            <p className="text-center text-[15px] text-[#888da8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur ratione tempora architecto soluta aliquid, odit aut doloremque</p>
          </div>
          <div>
            <h1 className="font-bold text-[18px] text-center">Indicações</h1>
            <p className="text-center text-[15px] text-[#888da8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur ratione tempora architecto soluta aliquid, odit aut doloremque</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Spider