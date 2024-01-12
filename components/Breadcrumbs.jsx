import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Breadcrumbs = ({ category, tag, itemName }) => {  
  console.log(tag)
  return (
    <nav
      className="flex items-center text-body2 gap-4 py-2"
      aria-label="Breadcrumb"
    >
      <span>Home</span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-primary-500"
        width={8}
      />
      <span>{category}</span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-primary-500"
        width={8}
      />
      <span>{tag}</span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-primary-500"
        width={8}
      />
      <span aria-current="page">{itemName}</span>
    </nav>
  );
};

export default Breadcrumbs;
