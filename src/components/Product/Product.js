import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="itemcard">
      <img src={props.image_url} className="img" alt="howdy" />
      <div className="nexttoimg">
        <div>{props.name}</div>
        <div>${props.price}</div>
      </div>
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default Product;
