import Card from "../Card/Card";

import useLogements from "../Hooks/useLogements";
import "./Gallery.scss";

function Gallery() {
  const logements = useLogements();
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
