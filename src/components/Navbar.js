import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { SiBitcoinsv } from "react-icons/si";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <select
            style={{
              backgroundColor: "#121221",
              border: "none",
              color: "white",
            }}
          >
            <option className="img-fluid logo" alt="brand">
              Trade
            </option>
          </select>
        </Navbar.Brand>
        <Navbar.Brand href="/" className="d-flex">
          <p
            style={{ color: "#white", marginTop: "10px" }}
            className="img-fluid logo"
            alt="brand"
          >
            Market
          </p>
        </Navbar.Brand>
        <Navbar.Brand href="/" className="d-flex">
          <p
            style={{ color: "#white", marginTop: "10px" }}
            className="img-fluid logo"
            alt="brand"
          >
            Bridge
          </p>
        </Navbar.Brand>
        <Navbar.Brand href="/" className="d-flex">
          <p
            style={{ color: "#white", marginTop: "10px" }}
            className="img-fluid logo"
            alt="brand"
          >
            Trade Rewards
          </p>
        </Navbar.Brand>
        <Navbar.Brand href="/" className="d-flex">
          <p
            style={{ color: "#white", marginTop: "10px" }}
            className="img-fluid logo"
            alt="brand"
          >
            Referral
          </p>
        </Navbar.Brand>
        <Navbar.Brand href="/" className="d-flex">
          <p
            style={{ color: "#white", marginTop: "10px" }}
            className="img-fluid logo"
            alt="brand"
          >
            Leaderboard
          </p>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <SiBitcoinsv style={{ marginBottom: "2px" }} /> $0.0745
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <button className="btn-vio">Connect Wallet</button>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <select
                  style={{
                    backgroundColor: "#121221",
                    border: "none",
                    color: "white",
                  }}
                >
                  <option>English</option>
                </select>{" "}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <FiSettings
                style={{ fontSize: "1.2em", marginTop: "15px", color: "white" }}
              />{" "}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
