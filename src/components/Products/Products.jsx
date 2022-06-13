import React from "react";
import Product from "./Product/Product"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
   
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    
    })
      .then((res) => {
     
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  return <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
{data.map((item)=>{
      {/* console.log(item) */}
 
       return <Product key={item.id} {...item} />
 
  
    })}
  </div>;
};

export default Products;
