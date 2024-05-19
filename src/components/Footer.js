import logoFooter from "../assets/logoFooter.png";
function Footer() {
  return (
    <footer
      style={{
        background: "black",
        color: "white",
        padding: "40px",
        paddingBottom: "7px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <div>
        <img
          src={logoFooter}
          alt="logo"
          style={{ width: "80px", color: "white" }}
        />
      </div>
      <p> &copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
