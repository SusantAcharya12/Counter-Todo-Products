import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



function Product() {
    const [data,setData] = useState([]);
    console.log(data)


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

            <div className="grid-product">

              <div className="parent-grid-image">
                <div className="child-grid-image">
                  <img src={item.images[0]}/>
                  <img className="child-grid-image-2" src={item.images[1]}/>

                </div>

                <div className="single-child-grid">
                <img className="single-child-img" src={item.images[2]}/>

                </div>

              </div>

              <div className="product-content">
                <img src={item.images[1]}/>
                <h1>{item.brand}</h1>
                <h2>{item.category}</h2>
                <p> {item.description}</p>
                <h4>Price: ${item.price}</h4>
                <p>Rating:<strong>{item.rating}</strong></p>


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
