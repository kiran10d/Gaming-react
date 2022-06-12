import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Header.module.scss';
export default function Header() {
  return (
    <>
      <Navbar bg="primary" fixed="top" variant="dark" className={styles.Header}>
        <Container fluid>
          <Navbar.Brand href="#home">KIRAN</Navbar.Brand>
          <Nav>
            <input type="text" placeholder="Search" />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
