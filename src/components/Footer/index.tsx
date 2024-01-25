import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <nav>
          <ul className="footer__menu">
            <Link to='/contact'>CONTACT</Link>
            <Link to ='/terms'>TERMS OF SERVICES</Link>
            <Link to='/shipping'>SHIPPING AND RETURNS</Link>
          </ul>
        </nav>
        <input type="email" name="" id="" />
      </div>
      <div className=""></div>
    </footer>
  );
};

export default Footer;
