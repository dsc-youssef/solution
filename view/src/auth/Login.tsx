// Dependencies
import { FC } from "react";

// Bootstrap Components
import { Container } from "react-bootstrap";

const Login: FC = () => {

  const handelFormSubmit = (e: any) => {
    e.preventDefault();
    const { username, password } = e.target?.elements;
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
