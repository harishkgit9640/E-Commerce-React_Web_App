import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Category from './Components/Shop/Category';
import Product from './Components/Shop/Product';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import PageError from './Components/Errors/PageError';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/all' element={<Shop />} />
        <Route path='category/:category' element={<Category />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='*' element={<PageError />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
