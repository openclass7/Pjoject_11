import headerAccueil from "../../assets/headerAccueil.png";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Header>
        <div className="home-container">
          <img
            className="header-image"
            src={headerAccueil}
            alt="App headerAccueil"
          />
          <p className="header-text">Chez vous, partout et ailleurs </p>
        </div>
      </Header>
      <Menu />
      <Footer />
    </>
  );
}
export default Home;
