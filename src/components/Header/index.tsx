import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import cart from "../../assets/svg/cart.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to='/'><img src={logo} alt="logo" /></Link>
       <nav>
        <ul>
          <Link to='/shop'>Shop</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/about'>About us</Link>
          <Link to='/cart'>
            <img src={cart} alt="cart" className="cart-btn"/>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header
