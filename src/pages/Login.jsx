import React, { useState } from "react";
import {useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { Navigate } from "react-router-dom";
// Navigate
const Login = () => {
  // const initial={
  //   email: "eve.holt@reqres.in",
  //   password: "cityslicka"
  // }
  const state =useSelector((state)=>state.auth.data.isAuthenticated)
  console.log(state)
  const dispatch=useDispatch()
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const onSubmit=(e)=>{
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((res) => {
        alert("success");
        dispatch({
          type: "AUTH_SIGN_IN_SUCCESS",
          token: res.data.token
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert("error");
      });
  
  }
  if(state){
    return <Navigate to={"/"}/>
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input data-cy="login-email" value={email} onChange={(e)=>setemail(e.target.value)} />
        <input data-cy="login-password"   value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button data-cy="login-submit" type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
