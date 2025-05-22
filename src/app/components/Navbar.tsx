'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} href="/fadena">
            Fadena
          </Nav.Link>
          <Nav.Link as={Link} href="/fadara">
            Fadara
          </Nav.Link>
                    <Nav.Link as={Link} href="/escuelas">
            Escuelas
          </Nav.Link>
                              <Nav.Link as={Link} href="/FFA">
            FFA
          </Nav.Link>
          <Nav.Link as={Link} href="/fmc">
            FMC
          </Nav.Link>
                    <Nav.Link as={Link} href="/undef">
            UNDEF
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
