import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = ( {setSearch} ) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  

  const { userInfo } = userLogin;

  
  

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
 
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">NOTEPAD</Link>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav className="m-auto" style={{ maxHeight: "100px" }} navbarScroll>
          {userInfo && (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          )}
          </Nav>
          {userInfo ? (
          <Nav className="mr-auto">
         
            <Nav.Link href="/mynotes">
              <Link to="/mynotes">MyNotes</Link>
            </Nav.Link>
            <NavDropdown title={`${userInfo?.name}`} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
         
          </Nav>
          ):(
            <Nav>
              
            </Nav>
            )}
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
