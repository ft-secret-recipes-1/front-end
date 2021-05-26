import {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

const initialState = {
    userName: '',
    password: ''
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
                    Log-In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
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
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button title='' onClick={navToLink}>Log-In</Button>
                <Button title='' onClick={navToLink}>Register instead</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default SignInForm;