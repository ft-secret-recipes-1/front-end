import {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup"

const initialState = {
    userName: '',
    password: ''
};


const SignInForm = (props) => {
    const [formSign, setFormSign] = useState(initialState);

    const changeHandler = (e) => {
        e.preventDefault();
        setFormSign({
            ...recipeData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.title>
                    Log-In
                </Modal.title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label htmlFor="userName">Username:</label>

                    <input name="userName"
                        value={formSign.userName}
                        onChange={changeHandler}
                        className="form-control"/>

                    <label htmlFor="password">Password:</label>

                    <input name="password" tyep="password"
                        value={formSign.password}
                        onChange={changeHandler}
                        className="form-control"/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={redirectTo}>Log-In</Button>
                <Button onClick={navToLink}>Register</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}
