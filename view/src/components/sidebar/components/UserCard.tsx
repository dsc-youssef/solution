// Dependencies
import { FC } from "react";

// Assets
import avatarLogo from "~/images/user_avatar.png";

const UserCard:FC = ()=> {
  return (
    <article className="sidebar-user-card">
      <div className="head">
        <img className="avatar" src={avatarLogo} alt="user avatar" />
        <div className="info">
          <h3 className="title">Empty User</h3>
          <p className="role">Customer</p>
        </div>
      </div>
      <div className="body">
        <button className="btn">Profile</button>
        <button className="btn">Logout</button>
      </div>
      
    </article>
  )
}

export default UserCard;
