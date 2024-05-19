import Header from "../Header";
import Footer from "../Footer";
import "./404.css";
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
