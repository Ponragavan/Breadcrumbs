import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, [id]);

  if (!product)
    return (
      <span className="absolute h-10 w-10 rounded-full top-1/2 left-1/2 border-2 border-red-500 border-r-yellow-600 animate-spin"></span>
    );

  return (
    <div className="p-4 min-h-screen text-white">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full md:w-1/3 h-auto object-cover   rounded-lg"
          />
          <div className="flex flex-col w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-lg font-semibold mb-4 bg-yellow-500 rounded-md w-20 text-center py-2 text-white">${product.price}</p>
            <p className="mb-4">{product.description}</p>
            <p className="mb-2">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="mb-2">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="mb-2">
              <strong>Rating:</strong> {product.rating}
            </p>
            <p className="mb-2">
              <strong>In Stock:</strong> {product.stock}
            </p>
            <p className="mb-2">
              <strong>Discount:</strong> {product.discountPercentage}%
            </p>
            <p className="mb-2">
              <strong>Minimum Order Quantity:</strong>{" "}
              {product.minimumOrderQuantity}
            </p>
            <p className="mb-2">
              <strong>Shipping Information:</strong>{" "}
              {product.shippingInformation}
            </p>
            <p className="mb-2">
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
            <p className="mb-2">
              <strong>Warranty:</strong>{" "}
              {product.warrantyInformation}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Images:</h3>
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className="h-24 object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
