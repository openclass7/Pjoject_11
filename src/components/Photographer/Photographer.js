/**
* Le composant `Photographer` affiche les détails d'un photographe spécifique, y compris sa photo de profil, ses images, son titre, son lieu, son nom, sa note et ses tags. Il affiche également la description du photographe et les détails de son équipement.

* Le composant utilise le hook `useLogements` pour récupérer la liste des logements disponibles, puis filtre cette liste pour trouver le logement qui correspond au paramètre `photographerId` de l'URL. Si le `photographerId` n'est pas trouvé dans la liste des logements, le composant redirige vers la page 404.
*/

import Detail from "../Detail/Detail";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useLogements from "../Hooks/useLogements";
import Collapse from "../Collapse/Collapse";
import "./Photographer.scss";

import { useParams, Navigate } from "react-router-dom";

function Photographer() {
  const params = useParams();

  const photographerId = params.photographerId;

  const logements = useLogements();

  const photographer = logements.filter((item) => item.id === photographerId);

  if (Array.isArray(logements) && logements.length > 0) {
    const isValidId = logements.find((item) => item.id === photographerId);

    if (!isValidId) {
      return <Navigate to="/404" replace />;
    }

    const photographerShow = photographer.map((item) => {
      return (
        <div key={item.id}>
          <Detail
            id={item.id}
            key={`${item.id}-detail`}
            photo={item.host.picture}
            images={item.pictures.map((picture) => picture)}
            title={item.title}
            location={item.location}
            name={item.host.name}
            rating={item.rating}
            tags={item.tags.map((tag) => (
              <p className="tag-container" key={`${item.id}-${tag}`}>
                {tag}
              </p>
            ))}
          />
          <div
            className="photographer-detail-container"
            key={`${item.id}-collapse`}
          >
            <div>
              <Collapse
                id={item.id}
                norm={"Description"}
                content={item.description}
              />
            </div>
            <div>
              <Collapse
                norm={"Équipments"}
                content={item.equipments.map((equipment) => (
                  <p key={`${item.id}-${equipment}`}>{equipment}</p>
                ))}
              />
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <Header className="photographer-header" />
        {photographerShow}

        <Footer />
      </>
    );
  }
}
export default Photographer;
