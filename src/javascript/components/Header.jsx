import React, { useEffect, useState } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloud} from '@fortawesome/free-solid-svg-icons'
function Header () {


    return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Food <FontAwesomeIcon icon={faCloud} /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/addRecipe">Add a recipe</Nav.Link>
      <Nav.Link href="/officialRecipes">Official recipes</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
);


}

export default Header;