import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imgaes/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./header.css";
import { useAuth } from "../context/GlobalState";
import {auth} from "../firebase"
const Header = () => {
  const {user ,basket} = useAuth()
  const handleSignOut =() => {
    auth.signOut();
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-input" type="text" />
        <SearchIcon sx={{ fontSize: "30px", bgcolor: "#e89700" }} />
      </div>

      <div className="nav">
        <Link to= {!user && "/login"}>
          <div className="header-options" onClick={handleSignOut} >
            <div className="header-options-line1">Hello {user? `${user.email}` : "Guest "} </div>
            <div className="header-options-line2"> {user? "Sign Out" : "Sign In"}</div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-options">
            <div className="header-options-line1"> Returns</div>
            <div className="header-options-line2"> & Orders</div>
          </div>
        </Link>
        <div className="header-options">
          <div className="header-options-line1"> Your</div>
          <div className="header-options-line2"> Prime</div>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header-optionsBaskets">
          <ShoppingBasketIcon sx={{ display: "flex", color: "white" }} />
          <span className="header-options">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
