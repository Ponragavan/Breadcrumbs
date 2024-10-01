import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  const [product, setProduct] = useState();
  const id = pathNames.length > 1 ? pathNames[1] : undefined;

  // Fetch product name based on product id if available
  if (id) {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const productName = res.title;
        setProduct(productName);
      });
  }

  return (
    <div className="text-white mt-5 max-sm:ml-2 ml-20 text-lg max-sm:text-base">
      {pathNames.length > 0 && (
        <Link to="/" className="pb-1 hover:border-b-2 hover:border-b-white">
          Home
        </Link>
      )}
      {pathNames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathNames.length - 1;

        return isLast ? (
          id ? (
            <span key={index}> &gt; {product}</span>
          ) : (
            <span key={index}> &gt; {name}</span>
          )
        ) : (
          <span key={index}>
            <Link to={breadcrumbPath}>
              {" "}
              &gt;{" "}
              <span className="pb-1 hover:border-b-2 hover:border-b-white">
                {name}
              </span>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
