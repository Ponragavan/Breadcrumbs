import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get("query");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((res) => {
          setProducts(res.products || []);
        });
    }
  }, [query]);

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">
        Search Results for "{query}"...🔥
      </h2>
      {products.length === 0 && (
        <p className="absolute top-1/2 left-1/2 text-white text-lg">No results found...</p>
      )}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {products.map((product, index) => {
          return (
            <Link
              to={`/products/${product.id}`}
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/6 min-h-80 p-4 hover:scale-105 transform transition duration-300 ease-in-out active:scale-100"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {product.title}
              </h2>
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-48 w-full object-cover mb-2"
              />
              <p className="text-lg font-bold text-gray-700 text-center py-2 bg-yellow-500 rounded-md">
                ${product.price}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
