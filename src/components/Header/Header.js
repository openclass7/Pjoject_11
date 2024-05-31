import logo from "../../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header({ children,activeLink, }) {
  return (
    <header>
      <div className="header-container">
      
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-bar">
          <p>
            <Link to="/" style={{ textDecoration: activeLink==='home'?'underline':'none' }}>Accueil</Link>
          </p>
          <p className=" nav-bar-item">
            <Link to="/about" style={{ textDecoration: activeLink==='about'?'underline':'none' }}>
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
