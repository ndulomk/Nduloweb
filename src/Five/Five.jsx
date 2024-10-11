import { useEffect, useRef, useState } from "react"
import { BiPlay } from "react-icons/bi"
import { BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"

const Five = ()=>{
  const imageone = useRef()
  const imagetwo = useRef()
  const [mywidth, setmywidth] = useState(window.screen.width)
  useEffect(()=>{
    let image1 = document.getElementById("imageone")
    let image2 = document.getElementById("imagetwo")
    setmywidth(window.screen.width) 

    setInterval(()=>{
      setmywidth(window.screen.width)
      if(window.screen.width <= 920){
        image1.classList.add("hidden", "transition-[0.5s]")
        image2.classList.remove("hidden", "transition-[0.5s]")
        image2.classList.add("flex", "justify-center", "items-center", "transition-[0.5s]")

      }
      else if(window.screen.width >= 921){
        image2.classList.add("hidden")
        image1.classList.remove("hidden")

      }
    }, 1000)

    
  }, [mywidth])
    return(
        <div className="bg-chihiro h-[720px] bg-cover py-[20px]">
          <div className="flex items-center justify-between px-[10%] max-[400px]:justify-center">
            <div>
              <img src="../../public/images/5/image/logo.svg" alt="" />
            </div>
            <div className="text-white flex gap-4 max-[400px]:hidden ">
              <BsGoogle/>
              <FaFacebook/>
              <BsTwitter/>
              <BsInstagram/>
            </div>
          </div>
          <div className="hidden" ref={imagetwo} id="imagetwo">
                <img src="../../public/images/5/image/image.svg" alt="" className="w-full max-[920px]:w-[70%]"/>
          </div>
          <div className="flex justify-between items-center px-[10%] max-[920px]:flex-col-reverse">
            <div className="text-[#fff] w-[50%] max-[930px]:w-[100%] ">
                  <p>HAYAO MIYAZAKI</p>
                  <h1 className="text-[35px] font-bold">A VIAGEM DE CHIHIRO</h1>
                  <p className="font-[600] text-[15px]">Chihiro arrived to an world magic dominated for one witch. they who dont follow the rules of the witch are transformated in animals</p>
                  <div className="flex gap-4 pt-5 max-[920px]:flex-col">
                    <button className="bg-[#f1a5b1] flex px-[10px] py-1 rounded-[3px] items-center text-black font-bold text-[14px] justify-center">
                      <BiPlay/>
                      Assistir Agora
                    </button>
                    <button className="border-[1px] border-[#f1a5b1] px-[10px] py-1 rounded-[3px] font-bold text-[14px]">
                      Assistir o trailer
                    </button>
                  </div>
              </div>
              <div className="" ref={imageone} id="imageone">
                <img src="../../public/images/5/image/image.svg" alt="" className="w-[70%]"/>
              </div>
          </div>

        </div>
    )

}
export default Five
