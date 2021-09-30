import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from "react-bootstrap";
import { BsChevronBarLeft} from 'react-icons/bs';
import "./Home.css";
import ContactUs from "./Home-form";
import HomeSlider from "./Home-slider";

function Cards() { 
    return (
        <Container className="cards-container">
    <Row>
       <Col md="2" className="cards-div">
           <div>
               <img className="card-image" src="/wallet.svg" ></img>
               <p className="card-title">أكثر من 200 خدمة</p>
           </div>
       </Col>
       <Col md="2" className="cards-div">
           <div>
               <img className="card-image" src="/wallet.svg" ></img>
               <p className="card-title">أكثر من 200 خدمة</p>
           </div>
       </Col>
       <Col md="2" className="cards-div">
           <div>
               <img className="card-image" src="/wallet.svg" ></img>
               <p className="card-title">أكثر من 200 خدمة</p>
           </div>
       </Col>
       <Col md="2" className="cards-div">
           <div>
               <img className="card-image" src="/wallet.svg" ></img>
               <p className="card-title">أكثر من 200 خدمة</p>
           </div>
       </Col>
    </Row>
    <Row className="second-row">
       <Col md="2" className="cards-div">
           <div>
               <img className="card-image" src="/wallet.svg" ></img>
               <p className="card-title">أكثر من 200 خدمة</p>
           </div>
       </Col>
       <Col md="2" className="cards-div">
           <div>
               <img className="card-image" src="/wallet.svg" ></img>
               <p className="card-title">أكثر من 200 خدمة</p>
           </div>
       </Col>
       <Col md="2" className="cards-div">
           <div>
               <img className="card-image" src="/wallet.svg" ></img>
               <p className="card-title">أكثر من 200 خدمة</p>
           </div>
       </Col>
       <Col md="2" className="cards-div">
           <div>
               <img className="card-image" src="/wallet.svg" ></img>
               <p className="card-title">أكثر من 200 خدمة</p>
           </div>
       </Col>
    </Row>
</Container>
   );
}

export default Cards;