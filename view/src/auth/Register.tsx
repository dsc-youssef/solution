// Dependencies
import { ChangeEvent, FC, useState } from "react";


const Register: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [image, setImage] = useState<null | File>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement | null>) => {
    if (e.target.files) return console.log(e.target.files[0]);
  }

  return (
    <form className="auth-form">
      <h3 className="form-title">Sign up</h3>
      <h4 className="form-message"><i className="fal fa-message" /> Lets Create a New Account !</h4>
      <label htmlFor="" className="form-label"><i className="fal fa-user" /> First Name</label>
      <input
        className="form-control"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="" className="form-label"><i className="fal fa-user" /> Last Name</label>
      <input
        className="form-control"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="" className="form-label"><i className="fal fa-user" /> Username</label>
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="" className="form-label"><i className="fal fa-user" /> Password</label>
      <input
        className="form-control"
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="" className="form-label"><i className="fal fa-user" /> Confirm Password</label>
      <input
        className="form-control"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <label htmlFor="" className="form-label"><i className="fal fa-user" /> Email</label>
      <input
        className="form-control"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="" className="form-label"><i className="fal fa-phone" /> Phone Number</label>
      <input
        className="form-control"
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label htmlFor="" className="form-label"><i className="fal fa-user" /> Image</label>
      <input
        className="form-control"
        type="file"
        onChange={handleImage}
      />
      <label htmlFor="" className="form-label"><i className="fal fa-user" /> Country</label>
      <select
        className="form-control"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="" disabled selected>Choose Your Country</option>
      </select>
      <button className="btn" type="submit">Register</button>
    </form>
  )
}

export default Register;
