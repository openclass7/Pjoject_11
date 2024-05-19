import { Link } from "react-router-dom";
function Advert(Props) {
  return (
    <div
      style={{
        background: `url(${Props.cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover", // Recadre/étire l'image pour couvrir tout le container
        margin: "10px",
        marginBottom: "50px",
        width: "27%",
        height: "340px",
        padding: "10px",
        borderRadius: "15px",
        position: "relative",
      }}
    >
      <p
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
