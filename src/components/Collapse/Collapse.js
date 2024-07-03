import "./Collapse.scss";
import { useState } from "react";

function Collapse(Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="collapse-container">
        <div className="norm">
          {Props.norm}
          <i
            onClick={toggleOpen}
            className={`chevron fa-solid fa-chevron-up ${
              isOpen ? "rotate" : ""
            }`}
          ></i>
        </div>
        <div className={` ${isOpen ? "content" : "hidden"} content-transition`}>
          {Props.content}
        </div>
      </div>
    </>
  );
}
export default Collapse;
