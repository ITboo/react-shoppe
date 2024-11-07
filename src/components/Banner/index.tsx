import { Link } from "react-router-dom";
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__info">
      <h2 className="banner__title">Gold big hoops </h2>
      <h3 className="banner__subtitle">$ 68,00</h3>
      <Link to='/' className="banner__btn">View Product</Link>
    </div>
    </div>
  );
};

export default Banner;
