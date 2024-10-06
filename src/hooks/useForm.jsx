import { useState } from "react"

const useForm =(initialValue)=>{
  const [formulario, setFormulario] = useState([])
  const nome = ""
   const handleData = ()=>{
    setFormulario((prev)=>[...prev, initialValue])
    console.log(formulario)
    return formulario
  }
  

  return [handleData, nome]

}
export default useForm

