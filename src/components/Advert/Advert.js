import { Link } from "react-router-dom";
import "./Advert.css";
function Advert(Props) {
  return (
    <div className="advert-container"  
    style={{ backgroundImage: `url(${Props.cover})` }}
    >
      <p className="advert-title"
        style={{
          position: "absolute",
          bottom: "5px",
          left: "25px",
          color: "white",
          fontSize: "25px",
        }}
      >
        <Link
          to={`/photographer/${Props.id}`}
          style={{ color: "white", textDecoration: "none" }}
        >
          {Props.title}
        </Link>
      </p>
    </div>
  );
}
export default Advert;
