import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Partners.css";
// import {} from "";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'; 
import { Button,Container,Row,Col, ButtonGroup} from 'reactstrap';
import {Card} from "react-bootstrap";
import { BsChevronBarLeft} from 'react-icons/bs';
import Registration from "./form.jsx";

function Partners() {
    return (
      <body className="Partners">
          <Container>
          <Row>
          <Col md={{ size: '6', offset: 6 }}> 
          <p id="titleee">استعن بالخبراء لإتمام
عملك الأن اونلاين مع معيـنـــى</p>
</Col>
</Row>
</Container>
           <Container >
            <Row>
             <Col  md={{ size: '6' }} id="first-Col" >
             <div id="first-div">
             <p id="first-sentence">...شركائنا</p>
             <p id="paragraph">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص 
بالتصاميم سواء كانت تصاميم مطبوعه     
لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص 
بالتصاميم سواء كانت تصاميم مطبوعه
لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص 
بالتصاميم سواء كانت تصاميم مطبوعه </p>
<p id="link-first-div">انضم إلينا الأن  <BsChevronBarLeft></BsChevronBarLeft></p>
                </div>
             </Col>
             
          <Col  md={{ size: '6' }} id="second-Col"><img id="partners-img" src="/Partners-image.png" alt="srcc" /></Col>
           
            </Row>
            </Container>
            <Container>
            <Row>
            <Col md >
            <p id="our-partners">شركائنا</p>
            </Col>
            </Row>
            </Container>
               <Container >
        <Row className="row-FAQ" >
       
     <Col md={{ size: '3', offset: 2 }}> 
     <ButtonGroup justified>
  <DropdownButton  className="button-dropdown1"  title="المدينة"id="dropdown-basic-button">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  {/* </Col> */}
    {/* <Col md={{ size: '3'}}>  */}
  <DropdownButton  className="button-dropdown2"  title="نوع العضوية" id="dropdown-basic-button" >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  {/* </Col> */}
    {/* <Col md={{ size: '3'}}>  */}
  <DropdownButton  className="button-dropdown3"  title="تصنيف الشريك" id="dropdown-basic-button">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  {/* </Col> */}
  <Button   id="first-button">
               الكل      
       </Button >
      
       </ButtonGroup>
       
       </Col>
      </Row>
      </Container> 
      <Container className="row-cards-container">
      <Row>
      <Col  md={{ size: '2', offset: 3}}>
     <Card className="cards" >
  <Card.Body>
  <Card.Img className="cards-image"  src="public/godaddy-logo.png" />
    <Card.Title className="cards-title"><a href="/GoDaddy">شركة جو دادى</a></Card.Title>
  </Card.Body>
</Card>
</Col>
  <Col md={{ size: '2'}}>
     <Card className="cards" >
  
  <Card.Body>
  <Card.Img className="cards-image"  src="/public/apple-logo.png" />
    <Card.Title className="cards-title"> شركة أبل </Card.Title>
  </Card.Body>
</Card>
</Col>
  <Col md={{ size: '2'}}>
     <Card className="cards" >
  <Card.Body>
  
  <Card.Img className="cards-image"  src="/public/Dell-logo.png" />
    <Card.Title className="cards-title"> شركة أبل</Card.Title>
  </Card.Body>
</Card>
</Col>
 </Row>
 <Row>
      <Col  md={{ size: '2', offset: 3}}>
     <Card className="cards" >
  <Card.Body>
  <Card.Img className="cards-image"  src="public/Microsoft logo.png" />
    <Card.Title className="cards-title">شركة ميكروسوفت</Card.Title>
  </Card.Body>
</Card>
</Col>
  <Col md={{ size: '2'}}>
     <Card className="cards" >
  
  <Card.Body>
  <Card.Img className="cards-image"  src="/public/google.png" />
    <Card.Title className="cards-title">شركة جوجل</Card.Title>
  </Card.Body>
</Card>
</Col>
  <Col md={{ size: '2'}}>
     <Card className="cards" >
  <Card.Body>
  
  <Card.Img className="cards-image"  src="/public/airbnb logo.png" />
    <Card.Title className="cards-title">شركة اير بي اند بي</Card.Title>
  </Card.Body>
</Card>
</Col>
 </Row>
 </Container>     
 <Registration/>
      </body>
    );
  }
  
  export default Partners ;
  