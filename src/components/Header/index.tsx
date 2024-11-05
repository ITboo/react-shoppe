import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

import "./Header.css";
import { Search, ShoppingCart, UserRound } from "lucide-react";

const Header = () => {
  return (
    <header>
      <Link to='/'><img src={logo} alt="logo" /></Link>
       <nav>
        <ul>
          <Link to='/shop'>Shop</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/about'>About us</Link>
          <span>|</span>
          <Search />
          <UserRound />
          <Link to='/cart'>
          <ShoppingCart />
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header
