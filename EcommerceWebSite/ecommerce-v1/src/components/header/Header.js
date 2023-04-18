import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/EcommercePlatform/" style={{"color":'white'}}>
                <FontAwesomeIcon icon = {faTags} /> Shop
            </Navbar.Brand>
            <Button href="/EcommercePlatform/form" variant="outline-info" className="me-2 me-auto">Login</Button>
            <Navbar.Brand href="/EcommercePlatform/cart" style={{"color":'white'}}>
                <FontAwesomeIcon icon = {faTags} /> Cart
            </Navbar.Brand>
            <NavLink className="nav-link" to="/EcommercePlatform/orderHistory">History</NavLink>
        </Container>
    </Navbar>
  )
}

export default Header