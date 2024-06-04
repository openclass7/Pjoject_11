import Header from "../Header/Header";
import headerAccueil from "../../assets/headerAPropos.png";
import Footer from "../Footer/Footer";
import Collapse from "../Collapse/Collapse";
import AProposData from "../../Data/AProposData.json";
import "./About.scss";

function About() {
  console.log(AProposData);

  const dataShow = AProposData.map((item, index) => {
    return <Collapse key={index} norm={item.norm} content={item.content} />;
  });

  return (
    <div>
      <Header activeLink="about">
        <div className="About-header">
          <img src={headerAccueil} alt="App headerAccueil" />
        </div>
      </Header>
      <div className="About-container">{dataShow}</div>

      <Footer />
    </div>
  );
}
export default About;
