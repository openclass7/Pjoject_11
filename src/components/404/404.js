import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./404.scss";
export default function Error404() {
  return (
    <>
      <Header />
      <div className="error-container">
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <p>Retourner sur la page d’accueil</p>
      </div>

      <Footer />
    </>
  );
}
