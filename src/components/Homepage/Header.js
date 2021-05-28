import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  const { signedIn } = props;

  // const showModal = ev => {}

  const signOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Secret Recipes!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        {(() => {
          if (localStorage.getItem("token") === null) {
            return (
              <>
                <Nav.Link href="/">Sign-In</Nav.Link>
                <Nav.Link href="/signUp">Sign-Up</Nav.Link>
              </>
            );
          }
          if (localStorage.getItem("token") !== null) {
            return (
              <>
                <Nav.Link style={{ marginLeft: "75%" }} href="/home">
                  Home
                </Nav.Link>
                <Nav.Link href="/addRecipe">Add Recipe</Nav.Link>
                <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
              </>
            );
          }
        })()}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
