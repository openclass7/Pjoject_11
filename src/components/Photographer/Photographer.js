import Detail from "../Detail/Detail";
import Footer from "../Footer";
import Header from "../Header";
import Selection from "../Selection/Selection";
import "./Photographer.css";
// import logements from "../../Data/logements.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import { useState } from "react";

function Photographer() {
  const params = useParams();
  console.log(params); ////{PhotographerId: '0979876d'}
  const photographerId = params.photographerId;
  console.log(photographerId); ////{PhotographerId: '0979876d'}

  const [logements, setLogements] = useState([]);
  console.log(logements);
  console.log(logements[0]);
  console.log(logements[1]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
      })
      .then((data) => setLogements(data));
  }, []);

  console.log("cccc", logements);
  const photographer = logements.filter((item) => item.id === photographerId);
  console.log(photographer);
  const photographerShow = photographer.map((item) => {
    return (
      <>
        <Detail
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            margin: "40px 0",
          }}
          id={item.id}
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
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: " 50%" }}>
            <Selection
              key={item.id}
              norm={"Description"}
              content={item.description}
            />
          </div>
          <div style={{ width: " 50%" }}>
            <Selection
              key={item.id}
              norm={"Équipments"}
              content={item.equipments.map((equipment) => (
                <p style={{ textAlign: "start" }} key={item.id}>
                  {equipment}
                </p>
              ))}
            />
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <Header />
      {photographerShow}

      <Footer />
    </>
  );
}
export default Photographer;
