// Dependencies
import { FC } from "react";

// Bootstrap Components
import { Dropdown } from "react-bootstrap";

// Assets
import user_avatar from "~/images/user_avatar.png"

const UserButtons: FC = () => {
  return (
    <div className="nav-user-buttons">
      <Dropdown className="navbar-user-dropdown">
        <Dropdown.Toggle className="toggle-btn" variant="none" >
          <img className="avatar " src={user_avatar} alt="user avatar" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.ItemText>Logout</Dropdown.ItemText>
        </Dropdown.Menu>
      </Dropdown>
      <i className="fal fa-shop" />
      <i className="fal fa-comments-question-check" />
      <i className="fal fa-gear animate-spin" />
    </div>
  )
}

export default UserButtons;
