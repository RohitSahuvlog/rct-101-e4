import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";

const Product = (props) => {

  const {id,name,description}=props
  const [data, setData] = useState([]);

  const [add,setadd]=useState(true)


  const AddClick=(id)=>{
    console.log(id)
    setadd(!add)
   
      axios({
        url: `http://localhost:8080/cartItems/${id}`,
        method: "POST",
   
      })
        .then((res) => {
          console.log(res.data)
          setData(res.data);
        })
        .catch((err) => {});
    }
  // const id = null;
  return (
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      { add ?     <button data-cy="product-add-item-to-cart-button" onClick={AddClick}>ADD to card</button>      : <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">8</span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">x</button>
      </div>  }
     
     
    </div>
  );
};

export default Product;
