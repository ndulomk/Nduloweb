import Reloadpage from "../Portfolio/Reloadpage"
import { Artigos } from "./Artigos"

const Home = ()=>{
    return(
        <div>
          <Reloadpage/>
            <nav className="flex bg-[#eeeeff] items-center px-[10%] justify-between max-[950px]:flex-col-reverse pb-5">
                <div className="w-[30%] max-[950px]:w-full max-[950px]:text-center">
                  <div>
                      <div className="font-bold">Encontre os <span className="text-[#846aff]">melhores artigos</   span> <p>sobre desenvolvimento em um so lugar</p></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis </p>
                    <button className="bg-[#846aff] p-1 text-[white] font-bold text-[14px] rounded-[2px]">Buscar artigos</button>
                  </div>
                </div>
                <div>
                    <img src="/illustra.png" alt="ee" className="w-[300px] max-[400px]:w-[200px]"/>
                </div>
            </nav>
            <section className="px-[10%]">
              <h1 className="font-bold pt-[20px] pb-[40px]">Artigos recomendados</h1>
              <div className="grid grid-cols-3 gap-5 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1">
                {
                  Artigos.map((item, index)=>{

                    return(
                      <div key={index} className="border-[1px] rounded-[4px]">
                        <img className="rounded-t-[4px]" src={item.id === 1 ?"/view.png":item.id ===2 ?"/image-2.png":item.id === 3 ? "/image-3.png":item.id === 4? "/image-4.png":item.id === 5?"/image-5.png":item.id === 6?"/image-6.png": <></>} alt="" />
                        <div className="p-5">
                          <h1 className="font-bold">{item.h1}</h1>
                          <p className="font-[500] text-[15px]">{item.p}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </section>
            <footer className="bg-[#eeeeff] py-[100px] mt-[50px]">
              <div>
                <form action="" className="flex items-center justify-center flex-col">
                  <h1 className="text-center font-bold text-[19px] mb-[10px]">Entre em contacto</h1>
                  <input className="mb-[20px] w-[300px] rounded-[4px] py-[4px] px-[10px]" type="text" placeholder="nome"/>
                  <input className="mb-[20px] w-[300px] rounded-[4px] py-[4px] px-[10px]" type="text" placeholder="Email" />
                  <textarea className="mb-[20px] w-[300px] rounded-[4px] py-[10px] h-[150px] px-[10px]" name="" id="" placeholder="Assunto da mensagem"></textarea>
                  <button className="bg-[#846aff] text-[15px] px-[78px] py-[5px] rounded-[3px] text-[white] font-bold ">Entrar em contacto</button>
                </form>
              </div>
            </footer>
        </div>
    )

}
export default Home
