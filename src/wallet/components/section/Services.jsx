import '../css/section.css'
import Box from './Box'
const Services = ()=>{
    return(
        <section className='space hero'>
            <div className='info'>
                <h1 className='infobase'>We provide a security on hour of aport</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit </p>
            </div>

            <div className='boxFlex'>
                <Box/>
                <Box/>
                <Box/>
            </div>


        </section>
    )

}
export default Services