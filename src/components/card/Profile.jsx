import { formatID } from "../../utilities/format";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  const {
    account: { role, id, firstName, lastName, email },
  } = props;

  return (
    <div className="relative flex flex-col items-start rounded-lg border border-secondary bg-secondary p-5 text-white shadow-lg">
      <Icon icon={faCircleUser} className="absolute top-3 right-3 text-2xl" />
      {role === "admin" ? (
        <>
          <span className="text-lg font-extrabold">Tigom Admin</span>
          <span className="text-sm">{email}</span>
        </>
      ) : (
        <>
          <span className="text-lg font-extrabold">
            {firstName} {lastName}
          </span>
          <span className=" font-bold">{formatID(id)}</span>
          <span className="text-sm">{email}</span>
        </>
      )}
    </div>
  );
};

export default Profile;
