import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import {myallProducts} from '../Data/products.js'
import ProductCard from './ProductCard';
function LandingPage() {

  const [products,setProducts]=useState([]);
  function loadProducts(){
    setProducts(myallProducts)
  }
  useEffect(()=>{
    loadProducts();
  },[])
  console.log(products)
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Catalog</h1>
      <div className="row">
        {myallProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default LandingPage