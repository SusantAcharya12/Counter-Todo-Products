import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function ApiCall() {
    const[value,setValue] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            const response = await fetch("https://dummyjson.com/products");
            const responseData = await response.json();
            setValue(responseData.products);
            setLoading(false)



        }
        fetchData()
    },[])
  return (
    <div className="MainGrid">
        <h1>SideEffects</h1>

    <div className="ApicallGrid">
        {
            loading ? (<p style={{color: 'white', fontSize: "100px"}}> loading... </p>) :
            value.map((item,i)=>(
                <div key={i} className="grid-item">
                    
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
