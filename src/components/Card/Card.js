import { Link } from "react-router-dom";
import "./Card.scss";
function Card(Props) {
  return (
    <div
      className="card-container"
      style={{ backgroundImage: `url(${Props.cover})` }}
    >
      <p className="card-title">
        <Link className="card-item" to={`/photographer/${Props.id}`}>
          {Props.title}
        </Link>
      </p>
    </div>
  );
}
export default Card;
