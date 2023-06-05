// Dependencies
import { FC, useState } from "react";

// Hooks
import useAuth from "@/hooks/useAuth";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [stayLogin, setStayLogin] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { login } = useAuth();

  // Handle Login
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await login({ username, password, stayLogin });
      setMessage(response?.data?.message || "");
      response?.data?.state && location.reload();
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleFormSubmit}>
      <h3 className="form-title">Sign in</h3>
      <h4 className="form-message"><i className="fal fa-message" /> {message === "" ? "Lets Write Your Data :)" : message}</h4>
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        className="form-control"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} value={password}
      />
      <div className="form-check">
        <input type="checkbox" id="keep-login-check" onChange={(e: any) => setStayLogin(e.target.checked as boolean)} />
        <label htmlFor="keep-login-check">keep me login</label>
      </div>
      <button className="btn" type="submit">Login</button>
    </form>
  )
}

export default Login;
