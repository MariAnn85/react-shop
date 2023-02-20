import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import {Globalstyle} from "./Globalstyle";
import {ThemeProvider} from ".styled-components/";
const App = () => {
  const theme={
    colors: {
      bg: "#000",
    },
  };
  return (
    <ThemeProvider theme={theme}>
   <Router>
     <Routes>
    <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/products" element={<Products />} />
<Route path="/contact" element={<Contact />} />
<Route path="/singleproduct/:id" element={<SingleProduct />} />
<Route path="/cart" element={<Cart />} />
<Route path="/*" element={<ErrorPage />} />
    </Routes>
   </Router>
  )


export default App;
