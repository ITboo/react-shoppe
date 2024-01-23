import logo from "../../assets/img/logo.png";
import cart from "../../assets/svg/cart.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>Shop</li>
          <li>Blog</li>
          <li>About us</li>
          <li>
            {" "}
            <img src={cart} alt="cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header
