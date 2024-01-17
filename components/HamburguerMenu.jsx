import Nav from "@components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const HamburguerMenu = ({ navLinks, handleButtonClick, handleNavClick}) => {
  return (
    <>
      <div className="flex justify-end bg-white dark:bg-gray-950">
        <button className="py-4 px-8" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faXmark} className="text-primary-500" />
        </button>
      </div>
      <Nav navLinks={navLinks} type={"menu"} handleNavClick={handleNavClick} />
    </>
  );
};

export default HamburguerMenu;
