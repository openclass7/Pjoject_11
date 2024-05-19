import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <header>
      <div
        style={{
          padding: "2rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <Link to="/">Accueil</Link>
          </p>
          <p style={{ marginLeft: "30px", color: "black" }}>
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
