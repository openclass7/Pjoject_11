import Card from "../Card/Card";

import UseLogements from "../Hooks/UseLogements";
import "./Gallery.scss";

function Gallery() {
  const logements = UseLogements();
  const appartementShow = logements.map((item) => {
    return (
      <Card
        id={item.id}
        key={item.id}
        title={item.title}
        cover={item.cover}
        className="gallery-item"
      />
    );
  });

  return <div className="gallery">{appartementShow}</div>;
}
export default Gallery;
