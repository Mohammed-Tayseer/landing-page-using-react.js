import './Navs.css'
import { Navbar, Nav, Container } from 'react-bootstrap/';
import logo from './../../assets/Images/logo.png'

const Navs = () => {
  return (
    <>
      <Navbar expand="lg" className="p-0">
        <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main" className='togle'  />
        <Navbar.Collapse id="main">
          <Nav className="m-auto mb-2 mb-lg-0">
            <Nav.Link className="p-2 p-lg-3" aria-current="page" href="index.html">Home</Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="services.html">About Us</Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="products.html">Explore Foods</Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="aboutUs.html">Reviews</Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="connectUs.html">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className='lastnav'>1800 789 123</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;