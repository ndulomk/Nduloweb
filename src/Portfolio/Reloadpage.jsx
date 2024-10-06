const Reloadpage = () => {
  const back =()=>{
    window.location.reload()
  }
  return (
    <div className="fixed bottom-[30%] right-[5%] text-[#fff] bg-[#3838ce] p-2 rounded font-bold">
      <button onClick={back}>Voltar</button>
    </div>
  )
}

export default Reloadpage