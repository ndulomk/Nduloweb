import Cookies from "js-cookie"
import { useState } from "react"
const useCookie = (key, initialValue) =>{
    const [value, setValue] = useState(()=>{
        const cookieValue = Cookies.get(key)
        if(cookieValue){
            return JSON.parse(cookieValue)
        }
        return initialValue
    })
    const updateCookie = (newValue, options)=>{
        setValue(newValue)
        Cookies.set(key, JSON.stringify(newValue), options)
    };
    const deleteCookies = () =>{
        setValue(null)
        Cookies.remove(key)
    }
    return [value, updateCookie, deleteCookies]
}
export default useCookie