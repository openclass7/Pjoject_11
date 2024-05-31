import Header from "../Header/Header";
import headerAccueil from "../../assets/headerAPropos.png";
import Footer from "../Footer/Footer";
import Selection from "../Selection/Selection";
import AProposData from "../../Data/AProposData.json";
import "./APropos.scss";

function APropos() {
  console.log(AProposData);

  const dataShow = AProposData.map((item, index) => {
    return <Selection key={index} norm={item.norm} content={item.content} />;
  });

  return (
    <div>
      <Header activeLink="about">
        <div className="APropos-header">
          <img src={headerAccueil} alt="App headerAccueil" />
        </div>
      </Header>
      <div className="APropos-container">{dataShow}</div>

      <Footer />
    </div>
  );
}
export default APropos;
