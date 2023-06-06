// Dependencies
import { ChangeEvent, FC, useState, useEffect } from "react";

// Types
import { CountryData } from "@/types/country";
import { ResponseData } from "@/types/response";

// Apis
import getCountriesApi from "@/apis/country/get_countries";


const Register: FC = () => {

  // Default Data
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [country, setCountry] = useState<string | null>(null);
  const [image, setImage] = useState<null | File>(null);

  // Handle Upload Image
  const handleImage = (e: ChangeEvent<HTMLInputElement | null>) => {
    if (e.target.files) return setImage(e.target.files[0]);
  }

  // Get Countries
  const [countries, setCountries] = useState<CountryData[]>([]);
  const handleGetCountries = async () => {
    const response: ResponseData<CountryData[]> = await getCountriesApi();
    response.status === 200 && response.data.state && setCountries(response.data.data);
  }
  useEffect(() => {
    handleGetCountries();
  }, []);

  return (
    <form className="auth-form">
      <h3 className="form-title">Sign up</h3>
      <h4 className="form-message"><i className="fal fa-message" /> Lets Create a New Account !</h4>
      <label htmlFor="firstName" className="form-label"><i className="fal fa-address-card" /> First Name</label>
      <input
        className="form-control"
        type="text"
        placeholder="First Name"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName" className="form-label"><i className="fal fa-address-card" /> Last Name</label>
      <input
        className="form-control"
        type="text"
        placeholder="Last Name"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="username" className="form-label"><i className="fal fa-user" /> Username</label>
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password" className="form-label"><i className="fal fa-lock" /> Password</label>
      <input
        className="form-control"
        type="text"
        placeholder="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirmPassword" className="form-label"><i className="fal fa-lock" /> Confirm Password</label>
      <input
        className="form-control"
        type="password"
        placeholder="Confirm Password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <label htmlFor="email" className="form-label"><i className="fal fa-mailbox" /> Email</label>
      <input
        className="form-control"
        type="email"
        placeholder="Email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="phoneNumber" className="form-label"><i className="fal fa-phone" /> Phone Number</label>
      <input
        className="form-control"
        type="text"
        placeholder="Phone Number"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label htmlFor="image" className="form-label"><i className="fal fa-camera" /> Image</label>
      <input
        className="form-control"
        type="file"
        id="image"
        onChange={handleImage}
      />
      <label htmlFor="country" className="form-label"><i className="fal fa-map" /> Country</label>
      <select
        className="form-control"
        id="country"
        onChange={(e) => setCountry(e.target.value)}
      >
        <option disabled selected>Choose Your Country</option>
        {countries.map((country: CountryData) => <option defaultValue={country.country} key={country.id}>{country.country}</option>)}
      </select>
      <button className="btn" type="submit">Register</button>
    </form>
  )
}

export default Register;
