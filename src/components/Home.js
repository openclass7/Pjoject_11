import headerAccueil from "../assets/headerAccueil.png";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header>
        <div
          style={{ textAlign: "center", margin: "auto", position: "relative" }}
        >
          <img
            style={{
              width: "95%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            src={headerAccueil}
            alt="App headerAccueil"
          />
          <p
            style={{
              fontSize: "30px",
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: " translate(-50%,-100%)",
            }}
          >
            Chez vous, partout et ailleurs{" "}
          </p>
        </div>
      </Header>
      <Menu />
      <Footer />
    </>
  );
}
export default Home;
