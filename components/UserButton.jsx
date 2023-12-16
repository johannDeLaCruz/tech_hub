import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UserButton = () => {
  return (
    <button className="btn-round">
      <FontAwesomeIcon width={20} icon={faUser}/>
    </button>
  )
}

export default UserButton