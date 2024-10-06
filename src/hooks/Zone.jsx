import { useState } from "react"
import useForm from "./useForm"

const Zone = () => {
  let senha = 
  console.log(senha)
  const [handledata, register, nome] = useForm(senha)
  const may =(e)=>{
    e.preventDefault()
    handledata()
    
  }
  return (
    <div>
      <form method="Get" action="useForm.jsx" className="bg-[#5f616a]">
        <input name="senha" id="senha" value={nome} placeholder="digite somethin"/>
        <button type="submit" onClick={may}>Submit</button>
      </form>
    </div>
  )
}
export default Zone