import { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProductReducer } from "../ReduxToolkit/slices/productSlice";
import { getProduct, updateProduct } from "../services/api";

import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../ReduxToolkit/slices/productsSlice";

function UpdateProduct({ id }) {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === id)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      // récupérer les valeurs du formulaire
      id: product.id,
    };
    dispatch(updateProduct(updatedProduct));
  };


}

export default UpdateProduct;
