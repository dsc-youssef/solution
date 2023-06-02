// Dependencies
import { FC, useState } from "react";

// Bootstrap Components
import { Container } from "react-bootstrap";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const fromData = new FormData();
  const handelFormSubmit = (e: any) => {
    e.preventDefault();
    formData.append("username", username);
    formData.append("password", password);
  }


  return (
    <Container>
      <section className="h-screen flex items-center justify-center ">
        <form className="flex flex-col gap-2" onSubmit={handelFormSubmit}>
          <input className="form-control" name="username" type="text" placeholder="username" />
          <input className="form-control" name="password" type="password" placeholder="password" />
          <button className="form-control" type="submit">Login</button>
        </form>
      </section>
    </Container>
  )
}

export default Login;
