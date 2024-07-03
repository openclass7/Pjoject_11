import Header from "../Header/Header";
import headerAccueil from "../../assets/headerAPropos.png";
import Footer from "../Footer/Footer";
import Collapse from "../Collapse/Collapse";
import "./About.scss";

const AProposData = [
  {
    norm: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées",
  },
  {
    norm: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    norm: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    norm: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En cas de problème, nous intervenons rapidement.",
  },
];
function About() {
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
