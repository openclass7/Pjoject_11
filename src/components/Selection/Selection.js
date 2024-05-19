import "./Selection.css";
import { useState } from "react";

function Selection(Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="selection-container">
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
export default Selection;
