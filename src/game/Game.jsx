import { useState } from "react"
import { jogo } from "./myobject"
import "./style.css"

const Game = ()=>{
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [showmodal, setShowModal] = useState(false)
    const [opengame, setopengame] = useState(false)
    const [face, setFace] = useState(0)
    console.log(arr.reverse())
    
    const randomarr = []

      for(let pos in arr){
 
        if(pos < 1){
          randomarr.push(3)
        }
        else if(pos < 2){
          randomarr.push(5)
        }
        else if(pos < 3){
          randomarr.push(6)
        }
        else if(pos < 4){
          randomarr.push(2)
        }
        else if(pos < 5){
          randomarr.push(9)
        }
        else if(pos < 6){
          randomarr.push(5)
        }
        else if(pos < 7){
          randomarr.push(4)
        }
        else if(pos < 8){
          randomarr.push(8)
        }
        else if(pos < 9){
          randomarr.push(7)
        }
      }

    
    const Restartgame=()=>{
      setTimeout(() => {
        setopengame(false)
      }, 3000);
      setShowModal(false)

    }
    return(
      
        <div className="w-full bg-[radial-gradient(#8958ff,#000014)] py-[50px] h-[659px]">
          {showmodal ?<div className="absolute top-0 right-0 left-0 bg-[#0000009f] h-[658px] text-white flex justify-center items-center">
              <div className="bg-[black] w-[30%] h-[40%] rounded-[5px] p-4 flex flex-col items-center">
                <h1 className="text-center text-[30px] font-bold mb-[20px]">Buuh!</h1>
                <p className="font-[600] mb-[20px] text-center">Conseguiu vencer o jogo da memoria quer jogar novamente? </p>
                <button onClick={()=>Restartgame()} className="bg-[#8958ff] font-[600] p-1 rounded-[4px]">Jogar novamente</button>
              </div>
          </div>:<></>}
          <div>
            <h1 className="text-3xl font-bold text-white text-center mb-[30px]">Game of Memory</h1>
          </div>
          {<div>
            <h1 className="text-center text-[white] font-bold text-3xl mb-[20px]">where is the 6 box?</h1>
          </div>}
          <div className="grid grid-cols-6 px-[17%] gap-[20px]">
            {
              jogo.map((item, index)=>{
                
                const send =()=>{
                  if(item.id === 6){
                    setShowModal(true)
                    setopengame(true)
                  }
                }
                if(opengame === true){
                  return(
                    <div  key={index}  className="bg-[#fff3bd] flex items-center justify-center rounded-[5px] w-[130px] cursor-pointer">
                    <img className="h-[60%] w-[60%]" src={item.id === 0 ?"../../public/images/7/image/2.svg":item.id === 1? "../../public/images/7/image/3.svg":item.id === 2? "../../public/images/7/image/4.svg":item.id === 3? "../../public/images/7/image/5.svg":item.id === 4 ? "../../public/images/7/image/6.svg":item.id === 5 ?"../../public/images/7/image/7.svg":item.id === 6 ?"../../public/images/7/image/8.svg":item.id === 7?"../../public/images/7/image/9.svg":item.id === 8 ?"../../public/images/7/image/7.svg":item.id === 9?"../../public/images/7/image/3.svg":item.id === 10?"../../public/images/7/image/6.svg":item.id === 11 ?"../../public/images/7/image/4.svg":item.id === 12?"../../public/images/7/image/3.svg":item.id === 13?"../../public/images/7/image/6.svg":item.id === 14 ?"../../public/images/7/image/8.svg":item.id === 15?"../../public/images/7/image/2.svg":item.id === 16 ?"../../public/images/7/image/7.svg":item.id === 17?"../../public/images/7/image/4.svg":item.id === 18?"../../public/images/7/image/5.svg":<></>} alt=""/></div>
                  )
                }
                else if(opengame === false){
                  return(
                    <div key={index} onClick={send} className="bg-[#fff3bd] flex items-center justify-center rounded-[5px] w-[130px] cursor-pointer h-[120px]">
                      <div className="font-bold">
                        Onde esta?
                      </div>
                    </div>
                  )
                }
                
              })
            }
            
          </div>

        </div>
    )

}
export default Game
