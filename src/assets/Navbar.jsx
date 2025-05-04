import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import image from "./image.png";
import placeholder from "./placeholder.png";


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"
    style={{
      display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
      <Container fluid style={{ backgroundColor: "#FFFFFF",
        
       }}>
        <NavLink to="hero">
        <Navbar.Brand href="#"
        style={{
          display:'flex',
          justifyContent:'center'
          
        }}>
          <img src={image} alt="" width="100" />
        </Navbar.Brand>
        </NavLink>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex w-100" style={{ maxWidth: "70%" }}>
            <Form.Control
              style={{
                backgroundColor: "#F7F7F7",
                height: "50px",
              }}
              type="search"
              placeholder="Search for mobile accessories and more"
              className="me-2"
            />
          </Form>

          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                border: "none",
                display: "flex",
                gap: "5px",
              }}
              variant="success"
              id="dropdown-basic"
            >
              <img src={placeholder} alt="" style={{ width: "20px" }} /> Noida
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/delhi">Delhi</Dropdown.Item>
              <Dropdown.Item href="#/mumbai">Mumbai</Dropdown.Item>
              <Dropdown.Item href="#/bangalore">Bangalore</Dropdown.Item>
              <Dropdown.Item href="#/hyderabad">Hyderabad</Dropdown.Item>
              <Dropdown.Item href="#/chennai">Chennai</Dropdown.Item>
              <Dropdown.Item href="#/kolkata">Kolkata</Dropdown.Item>
              <Dropdown.Item href="#/pune">Pune</Dropdown.Item>
              <Dropdown.Item href="#/jaipur">Jaipur</Dropdown.Item>
              <Dropdown.Item href="#/ahmedabad">Ahmedabad</Dropdown.Item>
              <Dropdown.Item href="#/lucknow">Lucknow</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
              <NavLink to="login">
              <Button
            style={{
              backgroundColor: "#42C8B7",
              border: "1px solid #42C8B7",
              color: "white",
              width: "100px",
              marginLeft: "10px",
            }}
            variant="outline-success"
          >
            Login
          </Button>

              </NavLink>
          
          <NavLink to="cart">
            <button
              style={{
                background: "none",
                border: "none",
                marginLeft: "10px",
              }}
            >
              <img
                style={{ width: "40px", margin: "5px" }}
                src="https://img.icons8.com/?size=100&id=13014&format=png&color=000000"
                alt="cart"
              />
            </button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
