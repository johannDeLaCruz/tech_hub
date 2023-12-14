import Nav from "@components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const HamburguerMenu = ({ navLinks, handleButtonClick }) => {
  return (
    <>
      <div className="flex justify-end">
        <button className="py-4 px-8" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <Nav navLinks={navLinks} type={"menu"} />
    </>
  );
};

export default HamburguerMenu;
