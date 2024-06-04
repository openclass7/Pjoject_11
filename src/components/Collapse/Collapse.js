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
            className={
              isOpen ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"
            }
          ></i>
        </div>
        <div className={` ${isOpen ? "content" : "hidden"} `}>
          {Props.content}
        </div>
      </div>
    </>
  );
}
export default Collapse;
