import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import {addItemToCart} from "../Redux/Slices/CartSlice"

function Product({product}) {
  const Product = ({ product }) => {
    const dispatch = useDispatch();
  
    const handleAddToCart = () => {
      dispatch(addItemToCart(product));
    };
  
    return (
      <div className="product">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <button onClick={handleAddToCart}>ADD TO CART</button>
      </div>
    );
  };
  
}

export default Product;
