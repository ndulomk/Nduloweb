import { SiJordan } from "react-icons/si"
import { Shoes } from "./Shoes"
import { useState } from "react"
import { BsCart } from "react-icons/bs"
import Reloadpage from "../Portfolio/Reloadpage"
const Home = ()=>{
  const [carrinho, setCarrinho] = useState([])
    return(
      <div>
        <Reloadpage/>
        <div>
          <div>
            <div>

            </div>
          </div>
        </div>
        <nav className="grid place-items-center font-[600] p-2">
          <div>Frete Gratis Para toda Angola</div>
        </nav>
        <div className="bg-home h-[300px] text-white flex p-[10%] items-center" style={{backgroundImage:"url('/hero.png')"}} >
          <div>
            <div className="flex items-center mb-5 font-[600]">
                <SiJordan size={20} className="mr-2"/> Jordan shoes
            </div>
            <h1 className="text-[20px] font-bold">A melhor loja de Jordan</h1>
            <div>
            <p>In saepe impedit deleniti consequatur!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
       
          </div>
        </div>
        <section className="overflow-y-auto mb-[100px]">
          <div className="text-center mt-[20px] mb-[20px]">
            <div className="font-[600]">
              <h1 className="font-bold text-[20px]">Os melhores em um so lugar</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p>Quis qui amet ut similique aspernatur reiciendis quas corrupti, </p> 
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[20px] px-[10%] mine max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:place-items-center">
            {
              Shoes.map((item, index)=>{
                const addto=()=>{
                  const myindex = carrinho.findIndex(product=>item.id === product.id)
                  if(myindex < 0){
                    setCarrinho((prev)=>[...prev, {id:item.id, nome:item.nome, price:item.price, quantity:1}])
                  }
                  else{
                    carrinho[myindex].quantity += 1
                  }
                  console.log(carrinho)

                }
                return(
                  <div key={index} className="cursor-pointer" onClick={addto}>
                    <div>
                      <img className="bg-[#f0f3ff] py-2 px-[40px]" src={item.id === 1 ?"/jordan-1.png": item.id === 2 ?"/jordan-2.png":item.id === 3 ? "/jordan-3.png":item.id === 4 ? "/jordan-4.png":item.id === 5 ? "/jordan-5.png":item.id === 6 ?"/jordan-6.png":<></>} alt="ee" />
                    </div>
                    <h1>
                      {item.nome}
                    </h1>
                    <p className="text-[#2525e5]">shoes air jordan</p>
                    <p className="font-bold">{item.price.toFixed(2)}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
        <footer className=" bg-[blue] w-full text-white font-bold text-center z-10 fixed bottom-0 py-2 text-[20px] flex justify-center items-center">
          <BsCart size={25}/>{"("}{carrinho.length}{")"}
        </footer>
      </div>
    )

}
export default Home
