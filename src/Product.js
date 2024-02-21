import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "./MyContext";



function Product() {
    const [data,setData] = useState([]);



    const {id}= useParams();
    
    useEffect(()=>{
        const fetchData = () => {
            const dataValue = fetch(`https://dummyjson.com/products/${id}`).then(res=> res.json()).then((products) => setData([products]));

        }


        fetchData()
    

    },[id])


  return (
    <div>

      {
        data.map(item=>(
          <div className="Top-product" key={item.id}>
            <div className="container">

            <div className="grid-parent">
              <div className="image-wrapper">
                <img src={item.images[0]}/>
              </div>

              <div className="grid-content">
                <h1> <span>Brand:</span> {item.brand}</h1>
                <h2><span>Category:</span> {item.category}</h2>
                <h2> <span>Price:</span> {item.price}</h2>
                <h4><span>Title:</span> {item.title}</h4>
                <p className="Rating"><span>Rating:</span> {item.rating}</p>
                <p>{item.description}</p>

              </div>
              </div>


            </div>
          </div>
        ))
      
      }


      </div>
  )

    }
       

export default Product
