import Todo from "./Todo";
import CounterApp from "./CounterApp";
import ApiCall from "./ApiCall";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";





const App = () => {
 const {darker,setDark} =  useContext(MyContext);

  return(
    <div style={{"--color": "#000", "--backgroundColor": darker ? "black": "white"}} className="main-App-Div">

      <button className="darkmode-button" onClick={()=>setDark(!darker)}>

        
       
        {darker ? <IoMdSunny/>: <FaMoon/> }

      </button>
    
      <header>
        <nav>
          <ul>
            {/* <li><a href="http://localhost:3003/">Home</a></li>
            <li><a href="http://localhost:3003/about">About</a></li>
            <li><a href="http://localhost:3003/contact">Contact</a></li> */}

            <li><Link style={{color: darker ? 'white': 'black'}} to={"/"}>CounterApp</Link></li>
            <li><Link style={{color: darker ? 'white': 'black'}} to={"/todo"}>Todo</Link></li>
            <li><Link style={{color: darker ? 'white': 'black'}} to={"/products"}>Products</Link></li>
            

          
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<CounterApp/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/products" element={<ApiCall/>}/>
        <Route path="/product/:id" element={<Product/>}/>

      </Routes>

    </div>
  

  )

}

export default App;
