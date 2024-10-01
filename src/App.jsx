import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import BreadCrumbs from "./components/BreadCrumbs";
import Search from "./components/Search";
import SearchResults from "./pages/SearchResults";

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/search") {
      setShowSearch(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <header className="flex justify-around items-center py-3 bg-yellow-500 gap-5">
        <AiOutlineShoppingCart size={30} className="text-indigo-600" />
        <h1 className="uppercase text-xl font-bold text-red-500">
          Shopping Cart
        </h1>
        <AiOutlineSearch
          size={30}
          className="text-indigo-600 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
      </header>
      {showSearch && <Search />}
      <BreadCrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
