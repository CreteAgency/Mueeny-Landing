import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,CardGroup,Card} from "react-bootstrap";
import { BsChevronBarLeft} from 'react-icons/bs';
import "./Home.css";
import ContactUs from "./Home-form";
import HomeSlider from "./Home-slider";
import Cards from "./Cards";

function Home() {
  

  return (
    <body class="Body">
     <div id="Menu"></div>
      <div id="firrst-div">
          <img id="first-image" src="Home_image.png" alt="alt"/>
      <div className="overlay">
      <div id="home-title-div"><p id="home-title" >اكبر تجمع لمزودي
الخدمات المختلفة وفى منصة واحدة</p>
<a href="#" id="home-subtitle">انضم إلينا وحمل التطبيق <BsChevronBarLeft></BsChevronBarLeft></a>
</div>
      </div>
</div>  

<div class="second-div">
  <Container  id="second-div-container">
      <Row>
          <Col  md="6" id="first-col">
              <ul id="second-div-li">
                <li id="mueeny-word">معينى</li>
                <li  id="text-box">معيني هي منصة رقمية متكاملة الخدمات تهدف لخدمة المجتمع من خلال 
توفير الوقت والجهد والمال لإنجاز الأعمال اليومية</li>    
                <li  id="youtube-logo"><img src="/YouTube-icon.png" alt="#" /></li>
                <li className="youtube-link-center"><a id="youtube-link" href="#">إضغط لمشاهدة الفيديو</a></li>
              </ul>
          </Col>
          <Col  md="6" id="second-col">
           <img class="second-div-photo" src="two-men.svg" alt="#"></img>
          </Col>
        </Row>
  </Container>
</div>
<Cards/>
<div class="fourth-div">
   <Container  id="fourth-div-container">
      <Row>
          <Col  md="6" id="second-col-fourth-div">
           <img class="second-div-photo" src="Mobiles.png" alt="#"></img>
          </Col>
          <Col  md="6" id="first-col-fourth-div">
             <ul id="fourth-div-li">
                <li id="first-sentencee">برنامج ولاء متميز ونوعي</li>
                <li  id="second-sentence">تجربة ثرية ومبتكرة تخولك للحصول 
على مميزات وعروض مقدمة من 
معيني وشركائنا</li>   
              </ul>
            </Col>   
        </Row>
    </Container>
  </div>
  <div class="fifth-div">
   <Container  id="fifth-div-container">
      <Row>
          <Col  md >
           <p id="second-col-fifth-div-p"> لحلول سريعة وفعالة لإنجاز الأعمال .. تطبيق معيني يخدمك. حمل التطبيق الآن</p>
          </Col>
      </Row>
      <Row>
          <Col md  id="first-col-fifth-div">
              <div id="apple-google">
              <img src="/Apple.png"></img>
              <img src="/Google.png"></img>
              </div>
          </Col>   
      </Row>
      <Row>
          <Col id="fifth-col"  md >
          <img id="app-download-img" src="/download-app.png"></img>
          </Col>
      </Row>
      <Row>
       <Col  md >
             <ul id="fifth-div-li">
                <li id="first-sentence-fifth-div">!تواصل معنا الأن</li>
                <li  id="second-sentence-fifth-div">يمكنك التواصل معنا، والاستفسار وتقديم المقترحات من خلال النموذج التالي</li>   
              </ul>
        </Col>
        </Row>
    </Container>
    </div>
<ContactUs/>

    <Container className="container-fluid" id="seventh-container">
      <Row>
          <Col md id="seventh-col">
              <ul id="second-div-li">
                <li id="first-sentence-seventh">اراء عملاءنا</li> 
                <li  id="second-sentence-seventh">آراء العملاء ومزودي الخدمات</li>
              </ul>
          </Col>
      </Row>
      <Row>
      <HomeSlider/>
      </Row>
    </Container>
</body>
  );
}

export default Home;
