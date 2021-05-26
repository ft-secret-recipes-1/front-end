import {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

const initialState = {
    userName: '',
    password: '',
    secondPassword: '',
    email: '',
};


const SignInForm = (props) => {
    const [formSign, setFormSign] = useState(initialState);

    const changeHandler = (e) => {
        e.preventDefault();
        setFormSign({
            ...formSign,
            [e.target.name]: e.target.value
        });
    }

    const navToLink = (ev) => {
      console.log(ev.target.title)
    }

    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label htmlFor="email">Enter your e-mail.</label>
                    <input name="email" type="email"
                        value={formSign.email}
                        onChange={changeHandler}
                        className="form-control"/>
                    <label htmlFor="userName">Username:</label>

                    <input name="userName"
                        value={formSign.userName}
                        onChange={changeHandler}
                        className="form-control"/>

                    <label htmlFor="password">Password:</label>

                    <input name="password" type="password"
                        value={formSign.password}
                        onChange={changeHandler}
                        className="form-control"/>
                    <label htmlFor="secondPassword">Confirm your Password:</label>
                    <input name="secondPassword" type="password"
                        value={formSign.secondPassword}
                        onChange={changeHandler}
                        className="form-control"/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button title='' onClick={navToLink}>Register</Button>
                <Button title='' onClick={navToLink}>Log-In Instead</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default SignInForm;