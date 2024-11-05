import { Link } from "react-router-dom";
import "./Footer.css";
import { Instagram, Linkedin, MoveRight, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <nav>
          <ul className="footer__menu">
            <Link to="/contact">CONTACT</Link>
            <Link to="/terms">TERMS OF SERVICES</Link>
            <Link to="/shipping">SHIPPING AND RETURNS</Link>
          </ul>
        </nav>
        <div className="subscribe__form">
          <input type="email" name="" id="" placeholder="Give an email, get the newsletter." className='subscribe__input'/>
          <MoveRight />
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2024 ITBoo. Terms of use and privacy policy.</span>
        <div className="footer__socials">
          <Linkedin />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
