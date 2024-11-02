import React from "react";
import addd from "../imgaes/addd.jpg";
import ChecoutProducts from "./ChecoutProducts";
import SubTotal from "./SubTotal";
import { useAuth } from "../context/GlobalState";
import "./CheckOut.css";

const CheckOut = () => {
    const { user, basket } = useAuth();
  return (
    <div className="checout">
      <div className="checout-left">
        <img className="checout-ad" src={addd} alt="imagee" />
      
      
      <div>
      <h3>Hello, {user?.email}</h3>
        <h2 className="checoutTitle">Your Shopping Basket</h2>
       {

         basket.length > 0 ?( basket.map((item) => (
          <ChecoutProducts
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
          ))):(
            <p className="empty-basket" >you didnt add any product ..your basket is empty</p>
          )
            
          

       }
        </div>
      </div>

      <div className="right-box" >
         
          <SubTotal/>

      </div>
    </div>
  );
};

export default CheckOut;
