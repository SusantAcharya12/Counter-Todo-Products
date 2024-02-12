import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



function Product() {
    const [data,setData] = useState({});


    const {id}= useParams();
    
    useEffect(()=>{
        const fetchData = () => {
            const dataValue = fetch(`https://dummyjson.com/products/${id}`).then(res=> res.json()).then((products) => setData(products));

        }

        fetchData()
    

    },[id])

    console.log(data)

  return (
    <div>
        hello
        
      
    </div>
  )
}

export default Product
