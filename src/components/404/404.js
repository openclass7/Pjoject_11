import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./404.scss";
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <>
      <Header />
      <div className="error-container">
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/"  >Retourner sur la page d'accueil</Link>

      </div>

      <Footer />
    </>
  );
}
