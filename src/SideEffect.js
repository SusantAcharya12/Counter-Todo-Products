import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function SideEffect() {
    const [value,setValue] = useState([]);
    const {products} = value;

    
    const ApiCall = () => {

        const firstCall = fetch("https://dummyjson.com/products").then(res=> res.json()).then(data =>setValue(data))
    }


    {useEffect(()=>{

        ApiCall()

        },[])}
    
  return (
    <div className='SideEffect-grid'>
        {products.map((element,i)=>(
            <div key={i}>
                <h1>{element.title}</h1>
                <img src={element.images[0]}/>

            </div>

        ))}
     
      
    </div>
  )
}

export default SideEffect
