import Todo from "./Todo";
import CounterApp from "./CounterApp";
import ApiCall from "./ApiCall";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./Product";



const App = () => {
  return(
    <div className="main-App-Div">
    
      <header>
        <nav>
          <ul>
            {/* <li><a href="http://localhost:3003/">Home</a></li>
            <li><a href="http://localhost:3003/about">About</a></li>
            <li><a href="http://localhost:3003/contact">Contact</a></li> */}

            <li><Link to={"/"}>CounterApp</Link></li>
            <li><Link to={"/todo"}>Todo</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            

          
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
