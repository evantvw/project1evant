import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="text-4xl">Pizza World</h2>
      <p className="w-1/2 text-center text-base2">
        Pizza World, serving authentic pizzas since 1970, is your go-to
        destination for the best in pizza excellence. Trusted by over 200
        thousand customers worldwide.
      </p>
      <div className="socials">
        <FaYoutube className="hover:text-default" />
        <FaInstagram className="hover:text-default" />
        <FaFacebook className="hover:text-default" />
        <FaTwitter className="hover:text-default" />
      </div>
    </footer>
  );
};

export default Footer;
