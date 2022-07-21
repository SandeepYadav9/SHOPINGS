import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/Products/ProductItem";
const Products = () => {
  const productLists = useSelector((state) => state.product.products);
  return (
    <div>
      {productLists.map((list) => {
        return (
          <ProductItem title={list.title} description={list.description} />
        );
      })}
    </div>
  );
};

export default Products;
