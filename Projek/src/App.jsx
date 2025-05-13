import React from 'react';
import './App.css'; 
import ProductDetail from './components/products';
import Navbar from './components/Navbar';
import ProductList from './components/product-ecards';
import Login from './components/login';

function App() {
  return (
    <>
      {/* <Navbar /> */}
   {/* Wrapper agar produk berada di tengah */}
   {/* <div className="flex justify-center mt-6">
        <ProductList className="w-full max-w-sm md:w-[280px] md:h-[420px] justify-between" />
      </div> */}
    <ProductDetail />
    {/* <Login /> */}
    </>
  );
}

export default App;


