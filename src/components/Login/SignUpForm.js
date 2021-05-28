import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialState = {
  user_username: "",
  user_password: "",
  secondPassword: "",
  user_email: "",
};

const SignInForm = (props) => {
  const [formSign, setFormSign] = useState(initialState);
  const history = useHistory();

  const changeHandler = (e) => {
    e.preventDefault();
    setFormSign({
      ...formSign,
      [e.target.name]: e.target.value,
    });
  };

  const navToLink = (ev) => {
    console.log(ev.target.title);
  };

  //TODO(Post Request)

  const onSubmit = (e) => {
    e.preventDefault();

    const tempFormSign = (({ user_username, user_password, user_email }) => ({
      user_username,
      user_password,
      user_email,
    }))(formSign);
    console.log(tempFormSign);
    axios
      .post(
        "https://ft-bw-may-secret-family-recipe.herokuapp.com/api/auth/register",
        tempFormSign
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data);
        history.push("/home");
      })
      .catch((err) => alert(err.response.data.message.toUpperCase()));
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label htmlFor="email">Enter your e-mail.</label>
          <input
            name="user_email"
            type="email"
            value={formSign.user_email}
            onChange={changeHandler}
            className="form-control"
          />
          <label htmlFor="userName">Username:</label>

          <input
            name="user_username"
            value={formSign.user_username}
            onChange={changeHandler}
            className="form-control"
          />

          <label htmlFor="password">Password:</label>

          <input
            name="user_password"
            type="password"
            value={formSign.user_password}
            onChange={changeHandler}
            className="form-control"
          />
          <label htmlFor="secondPassword">Confirm your Password:</label>
          <input
            name="secondPassword"
            type="password"
            value={formSign.secondPassword}
            onChange={changeHandler}
            className="form-control"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button title="" onClick={onSubmit}>
          Register
        </Button>
        <Button title="" onClick={navToLink}>
          Log-In Instead
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default SignInForm;
