import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,nav} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

function Footer(props) {
  return (
      <footer>
         <Container fluid className="container-cont-footer">
            <Row>
              <Col  md={{ size: '1', offset: 5 }} id="mueeny-logo-footer"><img src="/Logo.svg" alt="srcc" /></Col>
            </Row>
            <Row>
              <Col  >
                <ul id="footer-li">
                <li  class={`nav-item  ${
                  props.location.pathname === "/policy" ? "active" : "" }`}>
                     <Link  id="private-policy"  to="/Policy">
                     سياسة الخصوصية
                </Link>
                </li>
                <li class={`nav-item  ${
                  props.location.pathname === "/conditions" ? "active" : "" }`}>
                     <Link   className="footer-item-margin-right"  to="/conditions">
                     الشروط والأحكام
                </Link>
              </li>
              <li  class={`nav-item  ${
                  props.location.pathname === "/FAQ" ? "active" : "" }`}>
                     <Link className="footer-item-margin-right"  to="/FAQ">
                     الأسئلة الشائعة
                </Link>
                </li>
                <li  className="footer-item-margin-right">الوظائف</li>     
                </ul>  
              </Col>
            </Row>
            <Row>
            <ul id="div-logoss"> 
              <li  className="logos-item"><img src="/Twitter.svg" alt="My Image"/></li> 
              <li className="logos-item"><img src="/Instagram.svg" alt="#"/></li>
              <li className="logos-item"><img src="/Facebook.svg" alt="#"/></li>
              <li className="logos-item"><img src="/Linkedin.svg" alt="#"/></li>
            </ul>
            </Row>
            <Row>
              <Col><p id="copy-right">جميع الحقوق محفوظة لمعيني 2021</p></Col>
            </Row>
           </Container> 
      </footer>
        
  );
}

export default withRouter (Footer);
