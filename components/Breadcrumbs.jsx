import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Breadcrumbs = () => {
  return (
    <nav
      className="container flex items-center text-body2 gap-4 py-1"
      aria-label="Breadcrumb"
    >
      <a href="#" className="link-hover">
        Home
      </a>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-primary-500"
        width={8}
      />
      <a href="#" className="link-hover">
        Category
      </a>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-primary-500"
        width={8}
      />
      <span aria-current="page">Product</span>
    </nav>
  );
};

export default Breadcrumbs;
