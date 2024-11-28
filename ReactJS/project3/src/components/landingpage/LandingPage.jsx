import React, { useEffect, useState } from 'react'
import {myAllProducts} from '../../data/products.js'

  const LandingPage = () => {
  const [products,setProducts]=useState();

  function loadProducts()
  {
    setProducts(myAllProducts)
  }

  useEffect(
    ()=>{
      loadProducts();
    },[]
  );

  console.log(products)
  return (
    <div>
      {
        products.map(
          (product,index)=>{
            return <div key ={index}>
              <h1>product.title</h1>
            <p>{product.description}</p>
            
            </div>
          }
        )
      }
    
    </div>
  )
}

export default LandingPage