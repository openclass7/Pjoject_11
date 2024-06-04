import headerAccueil from "../../assets/headerAccueil.png";
import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header activeLink="home">
        <div className="home-container">
          <img
            className="header-image"
            src={headerAccueil}
            alt="App headerAccueil"
          />
          <p className="header-text">Chez vous, partout et ailleurs </p>
        </div>
      </Header>
      <Gallery />
      <Footer />
    </>
  );
}
export default Home;
