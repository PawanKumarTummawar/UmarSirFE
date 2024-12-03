import React from 'react'
import Landingpage from './components/landingpage/landingpage'
// import AllProducts from './components/AllProducts'
import Footer from './components/footer/footer'
// import AllProductsPro from './components/AllProductsPro'
import AllProductsProMax from './components/AllProductsProMax'
// import Header from './components/header/Header'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route
            path='/'
            element={
              <>
              <AllProductsProMax/>
              </>
            }
            />

            <Route
            path='/singlepro/:id'
            element={
              <>
              <SingleProduct/>
              </>
            }
            />

        </Routes>
      
        <Footer />
      </Router>
    </div>
  )
}

export default App