import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
   return (
      <Navbar className='sticky-nav' collapseOnSelect expand='lg' bg='dark' variant='dark'>
         <Container>
  
            {/* <Navbar.Brand>Address Book</Navbar.Brand> */}
   
            <Link to="/" style={{textDecoration:'none',paddingRight:'50px'}}>Address Book</Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                  <Link to="/addcontact" style={{textDecoration:'none'}}>Add New Contact</Link>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Navigation;
