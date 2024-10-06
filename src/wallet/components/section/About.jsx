import { CgArrowLongDown } from "react-icons/cg"
import { GiPlatform } from "react-icons/gi"
import { MdDoneAll, MdSecurity, MdSupport } from "react-icons/md"



const About = ()=>{
    return(
        <section className="section2">
            <div>
                <h1>We're Ready To Segure You On invetiments with many products on market and help on aport</h1>
                <CgArrowLongDown size={40}/>
            </div>
            <div className="dFlex">
                <div >
                    <div className="box2">
                        <MdDoneAll/>
                        <h1>Certifild Platform</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis optio eius corrupti in suscipit similique facilis ?</p>
                    </div>
                    <div className="box2">
                        <MdSupport/>
                        <h1>Customer Suport</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis optio eius corrupti in suscipit similique facilis ?</p>
                    </div>
                </div>
                <div>
                    <div className="box2">
                        <MdSecurity/>
                        <h1>High Security</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis optio eius corrupti in suscipit similique facilis ?</p>
                    </div>
                    <div className="box2">
                        <GiPlatform/>
                        <h1>Easy Platform</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis optio eius corrupti in suscipit similique facilis ?</p>
                    </div>

                </div>
            </div>
        </section>
    )

}
export default About