// Dependencies
import { FC } from "react";

// Assets
import { CONFIG } from "@/utils/config";

// Hooks
import useAuth from "@/hooks/useAuth";

const UserCard: FC = () => {
  const { getAuth, logout } = useAuth();
  const { first_name, country, last_name, image } = getAuth();
  return (
    <article className="sidebar-user-card">
      <div className="head">
        <img className="avatar" src={`${CONFIG.images_url}${image}`} alt="user avatar" />
        <div className="info">
          <h3 className="title">{`${first_name} ${last_name}`}</h3>
          <p className="country">{country}</p>
        </div>
      </div>
      <div className="body">
        <button className="btn" onClick={() => logout()}>Logout</button>
      </div>

    </article>
  )
}

export default UserCard;
