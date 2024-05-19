import Advert from "./Advert";
import { useEffect, useState } from "react";

function Menu() {
  const [logements, setLogements] = useState([]);

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

  const appartementShow = logements.map((item) => {
    return (
      <Advert
        id={item.id}
        key={item.id}
        title={item.title}
        cover={item.cover}
        style={{ margin: "40px 0" }}
      />
    );
  });

  return (
    <div
      style={{
        background: " #F6F6F6",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        width: "95%",
        margin: "auto",
        marginTop: "30px",
        borderRadius: "15px",
        padding: "50px 0px",
      }}
    >
      {appartementShow}
    </div>
  );
}
export default Menu;
