import { useNavigate } from 'react-router-dom';
import '../css/form.css'

const Navform = ()=>{
    const navigate = useNavigate();
    return(
        <nav className='nav'>
            <div className='brand' onClick={()=>navigate('/')}>
                    Wallet ao
            </div>

        </nav>
    )

}
export default Navform 