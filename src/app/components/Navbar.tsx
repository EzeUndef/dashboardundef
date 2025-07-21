'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/">
            Inicio
          </Nav.Link>
                    <Nav.Link as={Link} href="/Datos">
           Datos Personales
          </Nav.Link>
                              <Nav.Link as={Link} href="/Incompatibilidad">
           DJ Incompatibilidad
          </Nav.Link>
                              <Nav.Link as={Link} href="/Cargos">
           DJ Cargos y Actividades
          </Nav.Link>
                              <Nav.Link as={Link} href="/Familia">
           Grupo Familiar
          </Nav.Link>
                              <Nav.Link as={Link} href="/Formulario">
           Formulario 572
          </Nav.Link>
                                        <Nav.Link as={Link} href="/Anses">
           Anses
          </Nav.Link>
        </Nav>
        
      </Container>
    </Navbar>
  );
}

export default Navigation;
