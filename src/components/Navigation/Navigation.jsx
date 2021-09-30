import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import "./Navigation.css";
import {Container,Row,Col,NavDropdown} from "react-bootstrap";

function Navigation(props) {

  const [currentBg, setCurrentBg] = React.useState('');
  const [currentColor, setCurrentColor] = React.useState('#0b284a');
  const [currentPhoto, setCurrentPhoto] = React.useState('/Logo_header2.svg');
  const location = useLocation();
  
  React.useEffect(() => {
    if (window.location.pathname === "/Home") {
      setCurrentBg("");
      setCurrentColor("#0b284a");
      setCurrentPhoto("/Logo_header2.svg");
    } 
    else {
      setCurrentBg('#0b284a')
      setCurrentColor("#ffffff");
      setCurrentPhoto("/Logo.svg");
    }
  }, [location]);

  return (
   
<Container fluid className="container-cont-header" style={{ backgroundColor: currentBg}}>
        
      
        <Navbar className="Navbar">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Link class="navbar-brand" to="/Home"> 
          <Navbar-brand>
          <img src={currentPhoto}  alt="#" className="navbar-logo"></img>
          </Navbar-brand>
         </Link>      
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: currentColor}} className="nav-bar-items" href="#link">معينى</Nav.Link>
            <Nav.Link style={{ color: currentColor}}  className="nav-bar-items" href="#link">المميزات</Nav.Link>
            <Nav.Link style={{ color: currentColor}} className="nav-bar-items" href="#link">برنامج نقاط الولاء</Nav.Link>
            <Nav.Link  style={{ color: currentColor}} className="nav-bar-items" href="#link">شركائنا</Nav.Link>
            <Nav.Link  style={{ color: currentColor}} className="nav-bar-items" href="#link">التطبيق</Nav.Link>
            <Nav.Link style={{ color: currentColor, borderColor: currentColor}} className="nav-bar-items" id="border-item" href="#home">تواصل معنا</Nav.Link>
          </Nav>
          
          </Navbar.Collapse>
 
      
     
    
    </Navbar>
  
  </Container> 

  );
}

export default withRouter(Navigation);
