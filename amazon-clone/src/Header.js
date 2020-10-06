import { Search, ShoppingBasket } from "@material-ui/icons";
import { auth } from "firebase";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth().signOut();
    }
  };
  // BEM naming convention
  return (
    <nav className="header">
      {/* logo on the left => img */}
      {/* Link --> when we click on logo, it should redirect to home page */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      {/* Search bar */}
      <div className="header__search">
        <input className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={login}>
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sing In"}
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders </span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasket />
            {/* Number of items in the basket */}
            <span className="header__optionLineTwo header__optionBasket">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;
