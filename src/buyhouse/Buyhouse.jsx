import { BsTwitterX } from "react-icons/bs"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import Reloadpage from "../Portfolio/Reloadpage"

const Buyhouse = () => {
  return (
    <div className="">
    
      <nav className="flex justify-between px-[4%] items-center py-2 mb-[40px]">
        <div className="text-[#996830] text-[25px] font-bold hover:opacity-[80%] cursor-pointer">Wallet</div>
        <ul className="flex items-center gap-[16px] font-[600] text-[14px]">
          <li className="cursor-pointer hover:opacity-[70%]">Start</li>
          <li className="cursor-pointer hover:opacity-[70%]">About</li>
          <li className="cursor-pointer hover:opacity-[70%]">Galeria</li>
          <li className="bg-[#996830] p-1 rounded-[3px] text-[white] hover:bg-[#dd9543] hover:text-[black] cursor-pointer max-[360px]:hidden">Contato</li>
        </ul>
      </nav>
      <section className="px-[4%]">
        <h1 className="text-[40px] text-center font-[var]">Do for your house an paradise</h1>
        <div className="text-[19px] text-center mb-[40px]">
          <p>Find one variety of properties that combine with you.</p>
          <p>Forget all dificults to find one residency</p>
        </div>

        <div className="grid grid-cols-4 gap-[20px] px-[6%] self-center max-[1040px]:grid-cols-2 max-[1040px]:place-items-center">
          <img src="/wallet (2).png" alt=""className="mt-[10px]"/>
          <img src="/wallet (3).png" alt="" className="h-[399px] max-[1040px]:h-full"/>
          <img src="/wallet (4).png" alt="" className="mt-[10px]"/>
          <img src="/wallet (5).png" alt="" className=""/>
        </div>
      </section>
      <section className="px-[8%] flex items-center mt-[100px] gap-[20px] max-[870px]:flex-col">
        <div className="w-[40%] basis-[50%] max-[870px]:w-full">
          <div className="flex items-center max-[870px]:justify-center gap-2">
            <div className="border-[#996830] border-[1px] w-[60px]"></div>
            <div className="text-[#996830] uppercase font-[500]">
                Sobre
            </div>
            <div className="border-[#996830] border-[1px] w-[60px]"></div>
          </div>
          <div className="max-[870px]:text-center">
            <h1 className="text-[35px] font-[var] ">We transform your house of dreams in reality</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel quas labore unde. Nostrum, dolore nemo ad iusto reprehenderit voluptatibus dolorem obcaecati</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <img src="/wallet (6).png" alt="" className=""/>
          <img src="/wallet (7).png" alt="" className="mt-[40px]"/>
        </div>
      </section>
      <section className="px-[8%] flex gap-[60px] mt-[100px] max-[760px]:flex-col max-[760px]:items-center max-[760px]:justify-center">
        <div className="flex flex-col gap-y-10">
          <div className="flex items-center gap-2 text-[#996830] uppercase max-[760px]:justify-center">
            <div className="border-[#996830] border-[1px] w-[60px]"></div>
            <span >Galeria</span>
            <div className="border-[#996830] border-[1px] w-[60px]"></div>
          </div>
          <h1 className="font-[var] text-[35px] w-[60%] max-[760px]:text-center max-[760px]:w-full">Some of our works made with love</h1>
          <div className="max-[760px]:text-center">
            <img src="/wallet (8).png" alt="" className="mb-[15px]" />
            <h2 className="font-[var] text-[24px] mb-[10px] ">Móveis e Interiores</h2>
            <p className="font-[500]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aliquam molestiae mollitia illum dolore repellat debitis</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 max-[760px]:items-center max-[760px]:justify-center">
          <div className="max-[760px]:items-center max-[760px]:justify-center max-[760px]:flex max-[760px]:flex-col">
            <img src="/wallet (9).png" alt="" className="mb-[15px]"/>
            <h2 className="font-[var] text-[24px] mb-[10px]">Hotéis de luxo</h2>
            <p className="font-[500] max-[760px]:text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur expedita voluptatum pariatur accusamus odio.</p>
          </div>
          <div className="max-[760px]:items-center max-[760px]:justify-center max-[760px]:flex max-[760px]:flex-col">
          <img src="/wallet (1).png" alt="" className="mb-[15px]"/>
            <h2 className="font-[var] text-[24px] mb-[10px]">Piscina residencial</h2>
            <p className="font-[500] max-[760px]:text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur expedita voluptatum pariatur accusamus odio.</p>
          </div>
        </div>
      </section>
      <footer className="flex justify-between items-center mt-[80px] h-[80px] px-[4%] border-t-[1px] border-[#996830] text-[#888da8] gap-4 py-2 w-full">
        <div className="text-center">
       
        <span className="max-[410px]:hidden"> &copy; 2024</span>
        <span>Edgar Manuel Janota</span>

        </div>
        <div className="flex items-center gap-4 font-[500]">
          Conectar <div className="border-[1px] border-[#996830] w-[90%]"></div>
          <div className="flex items-center gap-[10px] text-[#996830]">
            <FaInstagram/>
            <FaFacebook/>
            <FaYoutube/>
            <BsTwitterX/>
          </div>

        </div>
      </footer>
      <Reloadpage/>
    </div>
  )
}

export default Buyhouse