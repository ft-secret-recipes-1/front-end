import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialState = {
  user_username: "Marge",
  user_password: "A@bc.123",
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formSign);
    axios
      .post(
        "https://ft-bw-may-secret-family-recipe.herokuapp.com/api/auth/login",
        formSign
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data);
        history.push("/");
      });
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Log-In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <label htmlFor="userName">Username:</label>

          <input
            name="userName"
            value={formSign.user_username}
            onChange={changeHandler}
            className="form-control"
          />

          <label htmlFor="password">Password:</label>

          <input
            name="password"
            type="password"
            value={formSign.user_password}
            onChange={changeHandler}
            className="form-control"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmit}>Log-In</Button>
        <Button title="" onClick={navToLink}>
          Register instead
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default SignInForm;
