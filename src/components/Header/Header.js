import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <header>
      <div className="header-container">
      
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-bar">
          <p>
            <Link to="/" style={{ textDecoration: "none" }}>Accueil</Link>
          </p>
          <p className=" nav-bar-item">
            <Link to="/about" style={{ textDecoration: "none" }}>
              A Propos
            </Link>
          </p>
        </nav>
      </div>
      {children}
    </header>
  );
}
export default Header;
