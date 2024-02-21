import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./MyContext";




function ApiCall() {
    const[value,setValue] = useState([]);
    const [loading,setLoading] = useState(false);
    // const [darker,setDark] = useContext(MyContext);
    const {darker,setDark} =  useContext(MyContext);



    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            const response = await fetch("https://dummyjson.com/products");
            const responseData = await response.json();
            console.log(responseData)
            setValue(responseData.products);
            setLoading(false)
            // console.log(value)



        }
        fetchData()
    },[])
  return (
    <div style={{"--maingridBg": darker ? 'black': "white"}} className="MainGrid">
        <h1 style={{color: darker ? "white": "black"}}>SideEffects</h1>

    <div className="ApicallGrid">
        {
            loading ? (<p style={{color: 'white', fontSize: "100px"}}> loading... </p>) :
            value.map((item,i)=>(
                <div key={i} className="grid-item" style={{"--product-boxshadow": darker ? 'none': "-1px -1px 18px 0px #615c5c inset"}}>
                    
                    <h1>{item.brand}</h1>
                    <img src={item.images[0]}/>
                    <h2>
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                    </h2>
                    <span>Price: {item.price}</span>
                    <p>{item.description}</p>
                </div>
            ))

        }
      
    </div> 
    </div>
  )
}

export default ApiCall
