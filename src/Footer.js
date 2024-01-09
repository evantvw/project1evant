import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Pizza World</h2>
      <p>
        Pizza World, serving authentic pizzas since 1970, is your go-to
        destination for the best in pizza excellence. Trusted by over 200
        thousand customers worldwide.
      </p>
      <div className="socials">
        <FaYoutube />
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
      </div>
    </footer>
  );
};

export default Footer;
