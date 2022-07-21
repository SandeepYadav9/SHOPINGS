import React from "react";
import Card from "../UI/Card";
import './ProductItem.css'
const ProductItem = (props) => {
  return (
    <Card>
      <div className="product-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Fav</button>
      </div>
    </Card>
  );
};

export default ProductItem;
