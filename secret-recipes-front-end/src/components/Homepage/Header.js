import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'

const Header = props => {
  const showModal = ev => {}

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Secret Recipes!</NavbarBrand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/signIn'>Sign-In</Nav.Link>
        <Nav.Link href='/signUp'>Sign-Up</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
