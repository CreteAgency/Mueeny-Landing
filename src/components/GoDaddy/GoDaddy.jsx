import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./GoDaddy.css";
import {Row,Col,Form,Button,Container,InputGroup} from "react-bootstrap";


function GoDaddy() {
    return (
      <body className=" GoDaddy">
     <Container className="godaddy-container">
                    <Row id="godaddy-row">
                        <Col md={{size:'3' , offset:5}} id="title-col">
                        <p id="title-godaddy">شركة جو دادي </p>
                        <p id="subtitle-godaddy">مدينة الرياض</p>
                        </Col>
                        <Col md="1" id="godaddy-col">
                        <img id="godaddy-img" src="/godaddy_logoo.png"/>
                            </Col>
                       </Row>
                       </Container>
                       <Container id="first-gp-container">
                       <Row>
                         <Col md={{size:'2' , offset:10}}>
                         <p id="first-group">المجموعة الأولى</p>
                         </Col>
                       </Row>
                       <Row>
                        
                         <Col md="6">
                         <img id="image-3" src="/image-3.png"></img>
                         </Col>
                         <Col md="6">
                         <Row>
                          
                           <img id="image-4" src="/image-1.png"></img>  
                        
                           </Row>
                           <Row>
                         <img id="image-2" src="/image-2.png"></img>
                       
                   </Row>
                         </Col>
                       </Row>
                 </Container>
                 <Container id="second-gp-container">
                       <Row>
                         <Col md={{size:'2' , offset:10}} id="second-gp-title-col">
                         <p id="second-group">المجموعة الثانية</p>
                         </Col>
                       </Row>
                       <Row>
                       <Col md={{size:'11' , offset:1}} id="second-gp-col">
                       <img id="image-2" src="/image-1.png"></img>
                       </Col>
                       </Row>
                       </Container>
      </body>
    );
  }
  
  export default  GoDaddy;
  