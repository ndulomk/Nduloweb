import "./App.css"
import First from "./First/First"
import Jordan from "./second/Jordan"
import Three from "./Three/Three"
import Login from "./Login/Login"
import Portfolio from "./Portfolio/Portfolio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Game from "./game/Game"
import Dashboard from "./tailwind/Dashboard"
import Teste from "./Teste"
import Zone from "./hooks/Zone"
import Pizza from "./Pizza/Pizza"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio/>}/>
          <Route path="/first" element={<First/>}/>
          <Route path="/Jordan" element={<Jordan/>}/>
          <Route path="/Three" element={<Three/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Game" element={<Game/>}/>
          <Route path="/tailwind" element={<Dashboard/>}/>
          <Route path="/pizza" element={<Pizza/>}/>
        
         
          <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
