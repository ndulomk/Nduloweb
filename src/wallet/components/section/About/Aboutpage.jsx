import { useState } from 'react'
import '../../css/about.css'
import '../../css/section.css'
const Aboutpage = ()=>{
    const [newsEmail, setNewsEmail]= useState('')
    return(
        <div className="About">
            <div className='aboutchild'>
                <h1>This Broker Results By work and satisfaction of our clients</h1>

            </div>
            <div className='aboutsis'>
            <h3>Subcribe to receive news about trade and more products on the broker</h3>
            <div>
                <input type="email" placeholder="Email Adress" onChange={(e)=>setNewsEmail(e.target.value)}/>
                <button className="btnGold">Send</button>
            </div>
            </div>
        </div>
    )

}
export default Aboutpage