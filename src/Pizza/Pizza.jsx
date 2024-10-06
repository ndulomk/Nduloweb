import { BsCartPlus, BsHeartFill } from "react-icons/bs"
import { Myorder } from "./myObject"
import { useState } from "react"
import Reloadpage from "../Portfolio/Reloadpage"

const Pizza = () => {
  const [carrinho, setCarrinho] = useState([])
  const [select, setSelect] = useState("")
  const [address, setAdress] = useState("")
  const [phone, setPhone] = useState(0)
  const [showmessage, setShowMessage] = useState(false)
  const [total, setTotal] = useState(0)
  const [modal, setModal] = useState(false)
  const [counter, setCounter] = useState(0)
  const [changestatus, setChangeStatus] = useState(false)
  const [changeother, setChangeOther] = useState(false)
   const currency =(amount)=>{
    if (String(amount).includes(",")) {
      amount = Number(amount.replace(",", "."));
    }
      
    const pamount = amount;
    const numberOfDecimals = 2; // set this to the desired number of decimal places
    const formattedValue = pamount.toLocaleString('pt', {
        style: 'currency',
        currency: 'AOA',
        minimumFractionDigits: numberOfDecimals,
        maximumFractionDigits: numberOfDecimals
    });

    return formattedValue;
   } 
   const chat =()=>{
    if(select === "Entrega"){
      if(address === 0){
        setTimeout(() => {
          setShowMessage(false)
          setChangeStatus(false)
        }, 3000);
        setShowMessage(true)
        setChangeStatus(true)
      }
      else if(address.length < 5){
        setChangeStatus(true)
        setTimeout(() => {
          setChangeStatus(false)
        }, 3000);
      }
      else{
        setModal(false)
        setCarrinho([])
        const message = encodeURIComponent(carrinho)
        const phone = "938393867"
        window.open(`http://wa.me/${phone}?text=${message} address: ${address}`, `"_blank"`)

      }

    }
    else if(select === "Takeaway"){
      if(phone === 0){
        setTimeout(() => {
          setShowMessage(false)
          setChangeOther(false)
        }, 3000);
        setShowMessage(true)
        setChangeOther(true)
      }
      else if(phone.length < 9){
        setTimeout(() => {
          setShowMessage(false)
          setChangeOther(false)
        }, 3000);
        setShowMessage(true)
        setChangeOther(true)
      }
      else{
        setModal(false)
        setCarrinho([])
        const message = encodeURIComponent(carrinho)
        const phone = "938393867"
        window.open(`http://wa.me/${phone}?text=${message} address: ${address}`, `"_blank"`)
      }
    }
   }

   const calculate=()=>{
    let n = 0
    if(carrinho.length > 0){
      setModal(true)
    }
    carrinho.map((item, index)=>{
      n+=item.price * item.quantity
      return n
    })
    setTotal(n)
   }
   const remove =(id)=>{

    setCounter(counter=> counter + 1)
    const index = carrinho.findIndex(item=>item.id === id)
    if(carrinho[index].quantity > 1){
      carrinho[index].quantity -=1
      setTotal(total - carrinho[index].price)
    }
    else{
      carrinho.splice(index, 1)
    }

   }
  return (
    <div>
      <Reloadpage/>
    {showmessage&&  <div className="bg-[#f1baba] absolute z-30 rounded-[5px] py-1 px-1 font-bold text-[#af1717] right-0">
        O input morada esta vazio
      </div>}
      {modal&&<div className="bg-[#00000056] w-full h-[1210px] absolute z-10 flex justify-center pt-[100px]">
        <div className="bg-[#fefbf4] border-[#ffbc48d8] border-[1px] fixed w-[40%] h-[60%] rounded-[5px] py-3 flex justify-start flex-col px-[2%] shadow-xl max-[880px]:w-[70%] max-[500px]:w-[90%] max-[390px]:h-[80%]">
        <span className="font-[600] text-[18px] mb-[20px] text-center">Finish Order</span>
        <div className="">
          {
            carrinho.map((item, index)=>{

              return(
                <div key={index}>
                  <div className="flex justify-between items-center mb-[20px] bg-[#94944790] px-2 py-1  rounded-[5px] shadow-xl max-[365px]:flex-col">
                    <div className="max-[270px]:flex max-[270px]:flex-col max-[270px]:items-center">
                      <span className="font-[500] ">{item.nome}</span>
                      <span className="text-[green]">{currency(item.price)}</span>
                      <span>{"("}{item.quantity}{")"}</span>
                    </div>
                    <button onClick={()=>remove(item.id)} className="font-[500]">Remover</button>
                  </div>

                </div>
              )
            })
          }
          <div className="font-bold max-[370px]:text-center">
            Total: {currency(total)}
          </div>
        </div>

          <div className="flex flex-col items-center">
            <select className="mb-[10px]" onChange={(e)=>setSelect(e.target.value)}>
              <option value="Selecion">--Selecione--</option>
              <option value="Takeaway">TakeAway</option>
              <option value="Entrega">Entrega</option>
            </select>
            {select === "Entrega"?<form className={changestatus ?"flex flex-col items-center":""}>
                <input className={changestatus?"border-[red] border-[1px] rounded-[15px] px-2 py-[4px]":"border-[gray] border-[1px] rounded-[15px] px-2 py-[4px]"} onChange={e=>setAdress(e.target.value)} placeholder="Morada"/>
                {changestatus&& <span className="text-red-800">Preencha este campo</span>}
              </form>:select === "Takeaway"?<form className={changeother ?"flex flex-col items-center":""}><input id="phone" type="number" className={changeother?"border-[red] border-[1px] rounded-[15px] px-2 py-[4px]":"border-[gray] border-[1px] rounded-[15px] px-2 py-[4px]"} placeholder="phone number" onChange={e=>setPhone(e.target.value)}/>
              {changeother&& <span className="text-red-800">Preencha este campo ou passe um valor aceitavel</span>}
              </form>:<></>}
              <div className="flex gap-5 items-center mt-[20px] max-[290px]:flex-col">
                <button className="bg-[#ffbc48d8] font-[500] px-2 py-1 rounded-[15px]  shadow-xl" onClick={chat}>Finalizar Compra</button>
                <button onClick={()=>setModal(false)} className="bg-[red] px-2 py-1 rounded-[15px] shadow-xl">Cancelar</button>
              </div>

          </div>
        </div>
      </div>}
      <nav>
        <div className=" h-[300px] flex items-center justify-center" style={{backgroundImage:"url('/image-1.png')", backgroundPositionY:"80%", backgroundPositionX:"50%"}}>
            <img src="/pizzalogo.svg" alt="" className="w-[25%] max-[960px]:w-[40%]"/>
        </div>
      </nav>
      <section className="mt-[40px]">
          <h1 className="text-center font-bold text-[25px] mb-[20px]">Mais vendidas</h1>
          <div onClick={calculate} className="flex fixed bg-[#ffbc48d8] rounded-[20px] p-[10px] cursor-pointer shadow-xl mx-[5%] items-center right-[1%] top-[300px] max-[]: opacity-40 hover:opacity-100"><BsCartPlus color="blue" size={30}/><span className="font-bold">{carrinho.length}</span></div>
          <div className="grid grid-cols-4 gap-5 px-[10%] max-[960px]:grid-cols-2 max-[470px]:grid-cols-1">
            {
              Myorder.map((item, index)=>{
                const addto=()=>{
                  const index = carrinho.findIndex(product=>product.nome === item.nome)
                  if(index < 0){
                    setCarrinho((prev)=>[...prev, {id:item.id, nome:item.nome, price:item.price, quantity:1}])

                  }
                  else{
                    carrinho[index].quantity += 1
                  }
                }

          
                
                return(
                  <div key={index} className="flex flex-col items-center">
                    <div className="flex absolute items-center justify-center">

                      <img className="w-[55%] hover:scale-110 hover:-rotate-2 duration-300" src={item.id === 0?"/pizza-1.png":item.id === 1?"./pizza-2.png":item.id === 2?"/pizza-3.png":item.id === 3?"/pizza-1.png":<></>} alt="" />

                    </div>
                    
                    <div className="bg-[#fefbf4] border-[1px] rounded-[4px] border-[#ffbc48d8] h-[200px] w-[100%] mt-[50px] pt-[60px] px-[10px] text-center shadow-xl">
                      <h1 className="font-[600]">{item.nome}</h1>
                      <p className="font-[500]">{item.info}</p>
                      <p className="font-bold text-[18px]">{currency(item.price)}</p>
                
                      <button onClick={addto} className="bg-[#ffbd48] w-[140px] py-1 rounded-[14px] font-[600] text-[14px] mt-[20px] hover:bg-[#8e6828] transition-[0.5s]">Comprar Agora</button>
                    </div>
    
                  </div>
                )
              })
            }
          </div>
      </section>
      <section className="mt-[60px] px-[10%] mb-[60px]">
            <div className="flex items-center justify-center gap-[10%] max-[960px]:flex-col">
              <img src="/imagepizza.png" alt="" className="w-[100%] h-[400px] max-[960px]:w-[80%] max-[350px]:h-[300px]"/>
              <div className="text-[17px] max-[960px]:text-center">
                <div className="font-bold text-[23px]">Sobre a La P<span className="text-[#ffbd48]">i</span><span className="text-[red]">z</span><span className="text-[#29d829]">z</span>a
                </div>
                <p className="font-[500]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid praesentium incidunt ullam numquam voluptatibus dicta aliquam, quisquam corporis nostrum ducimus quos repellendus corrupti! Cupiditate esse eveniet blanditiis quae enim alias.</p>
                <button className="bg-[#ffbd48] w-[40%] py-1 rounded-[14px] font-[600] text-[14px] mt-[20px] shadow-xl hover:bg-[#8e6828] transition-[0.5s]">Ler mais</button>
              </div>
            </div>
      </section>
      <footer className="bottom-0 bg-[#ffbd48] w-full flex items-center justify-between px-[10%] py-[10px] font-[500]">
        <span>Created by Edgar Manuel Janota</span>
        <span>2024</span>
      </footer>
    </div>
  )
}

export default Pizza