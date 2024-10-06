import '../css/add.css'
const Admin = ({mudar, setMudar})=>{
    return(
        <div className='admin'>
            <h2>Bem vindo</h2>
            <article className='article01'>
                <button className='btnadmin' onClick={()=> setMudar(!mudar)}>Adicionar cripto</button>
                <button className='btnadmin' onClick={()=> setMudar(!mudar)}>Adicionar FII</button>
            </article>
            <article>

            </article>
            <article>

            </article>
        </div>
    )
}
export default Admin