import { Link } from "react-router-dom";
import "./Advert.css";
function Advert(Props) {
  return (
    <div
      className="advert-container"
      style={{ backgroundImage: `url(${Props.cover})` }}
    >
      <p className="advert-title">
        <Link className="advert-item" to={`/photographer/${Props.id}`}>
          {Props.title}
        </Link>
      </p>
    </div>
  );
}
export default Advert;
