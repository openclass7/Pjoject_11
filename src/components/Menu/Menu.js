import Advert from "../Advert/Advert";

import UseLogements from "../Hooks/UseLogements";
import "./Menu.css";

function Menu() {
  const logements = UseLogements();
  const appartementShow = logements.map((item) => {
    return (
      <Advert 
        id={item.id}
        key={item.id}
        title={item.title}
        cover={item.cover}
        className="menu-item"
      />
    );
  });

  return (
    <div className="menu"
     
    >
      {appartementShow}
    </div>
  );
}
export default Menu;
