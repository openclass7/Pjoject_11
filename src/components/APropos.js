import Header from "./Header/Header";
import headerAccueil from "../assets/headerAPropos.png";
import Footer from "./Footer/Footer";
import Selection from "./Selection/Selection";
import AProposData from "../Data/AProposData.json";

function APropos() {
  console.log(AProposData);

  const dataShow = AProposData.map((item, index) => {
    return <Selection key={index} norm={item.norm} content={item.content} />;
  });

  return (
    <div>
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
        </div>
      </Header>
      <div
        style={{
          width: "80%",
          textAlign: "center",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        {dataShow}
      </div>

      <Footer />
    </div>
  );
}
export default APropos;
