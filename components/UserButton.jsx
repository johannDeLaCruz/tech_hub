import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const UserButton = () => {
  return (
    <button className="btn-round">
      <Link href={"/profile"}>
        <FontAwesomeIcon
          width={20}
          icon={faUser}
          style={{ display: "block" }}
        />
      </Link>
    </button>
  );
};

export default UserButton;
