import React from "react";
import { useSelector } from "react-redux";
const Products = () => {
  const productLists = useSelector((state) => state.product.products);
  return (
    <div>
      {productLists.map((list) => {
        return (
          <div>
            <h1>{list.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
