import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/cart" element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
