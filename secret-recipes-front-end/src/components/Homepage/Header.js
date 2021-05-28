import { Nav, Navbar } from 'react-bootstrap'

const Header = props => {
  const { signedIn } = props

  const showModal = ev => {}

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Secret Recipes!</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse>
        {(() => {
          if (localStorage.getItem("token") === null) {
            return (
              <>
                <Nav.Link href='/'>Sign-In</Nav.Link>
                <Nav.Link href='/signUp'>Sign-Up</Nav.Link>
              </>
            )
          }
          if (localStorage.getItem("token") !== null) {
            return (<><Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/addRecipe'>Add Recipe</Nav.Link></>)
          }
        })()}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
