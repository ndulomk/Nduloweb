import { CgArrowRight } from 'react-icons/cg'
import '../css/footer.css'
const Footer =()=>{
    return(
        <footer>
            <div>
                <h1>Wallet ao</h1>
                <p>Enter your email to receive notices about investiments</p>
                <div>
                <input type="text" placeholder="EMAIL ADDRESS" /><button className='btnNO'><CgArrowRight/></button></div>
            </div>
            <div>
                <h1>My Account</h1>
                <p>Profile</p>
                <p>Favorites</p>
                <p>Whatsapp</p>
                <p>Settings</p>
            </div>
            <div>
                <h1>Resources</h1>
                <p>Platform Status</p>
                <p>NewsLetter</p>
                
            </div>
            <div>
                <h1>Community</h1>
                <p>Help Center</p>
                <p>Crypto Wallet</p>
                <p>Suggest Feature</p>
                <p>Subscribe</p>
            </div>
            <div>
                <h1>Social Media</h1>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Youtube</p>
            </div>
        </footer>
    )

}
export default Footer