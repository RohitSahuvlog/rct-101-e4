import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export  const Navbar = () => {
const dispatch =useDispatch()
  const onSubmit=()=>{

    dispatch({
      type: "AUTH_SIGN_OUT"
     
    });
  }
  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-between"}}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
      <Link data-cy="navbar-home-link" to="/" >
      Home</Link>
      </div>
      <div style={{display:"flex"}}>
        <div data-cy="navbar-cart-items-count">3</div>
        <button data-cy="navbar-login-logout-button" onClick={onSubmit}>logout</button>
      </div>
    </div>
  );
};


