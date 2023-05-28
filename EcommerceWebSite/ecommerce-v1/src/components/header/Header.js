import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";





const Header = ({user, getUser}) => {
  let title = 'guest';
  if(user){
    if(user.role === 'guest'){
      title = 'guest';
    }
    else if(user.role === 'admin'){
      title = 'admin';
    }
    else{
      title = user.username;
    }
  }

  const handleLogout = () =>{
    if(secureLocalStorage.getItem('user') !== null){
      secureLocalStorage.removeItem('user');
    }
    getUser(secureLocalStorage.getItem('session'));
  }

  const navigate = useNavigate();
  const handleLogin = () =>{
    navigate('/form');

  }

  const handleDevlogs = () =>{
    navigate('/devlog');
  }


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Nav className="ml-auto">
            <Navbar.Brand as={NavLink} to="/" style={{"color":'white'}}>
                <FontAwesomeIcon icon = {faTags} /> Shop
            </Navbar.Brand>
            <NavDropdown title={`Welcome ${title}!`} id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item onClick={user && (user.role === 'user' || user.role === 'admin') ? handleLogout : handleLogin}>
                {user && (user.role === 'user' || user.role === 'admin') ? 'Logout' : 'Login'}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleDevlogs}>DevLogs</NavDropdown.Item>
              {/**
               *  <NavDropdown.Item>Profile</NavDropdown.Item>
               *  <NavDropdown.Item>Settings</NavDropdown.Item>
              */}
            </NavDropdown>
          </Nav>

          <Nav className='mr-auto'>
            <Navbar.Brand as={NavLink} to="/cart" style={{"color":'white'}}>
                <FontAwesomeIcon icon = {faShoppingCart} /> Cart
            </Navbar.Brand>
            <NavLink className="nav-link" to="/orderHistory">History</NavLink>
          </Nav>
            

            
        </Container>
    </Navbar>
  )
}

export default Header