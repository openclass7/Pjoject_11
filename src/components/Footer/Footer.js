import logoFooter from "../../assets/logoFooter.png";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div>
        <img className="logoFooter" src={logoFooter} alt="logo" />
      </div>
      <p> &copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
