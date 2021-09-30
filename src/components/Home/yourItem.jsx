
import React ,{ useState } from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from "react-bootstrap";
import "./Home.css";




function Item() { 
    return (
<div>
    <div className="customSlider">
    <Row>
        <p id="card-context">لوريم ايبسوم هو نموذج افتراضي يوضع في 
            التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم
              لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
             العميل ليتصور طريقه وضع النصوص بالتصاميم سواء
             كانت تصاميم مطبوعهسواء
             كانت تصاميم مطبوعه</p>
    </Row>
    <Row>
 <Col md id="text-col">
   
     <p id="card-title">وليد عبدالعزيز</p>
     <p id="card-subtitle">مدير منفذ</p>
    
 </Col>
 <Col md="4" id="img-col">
     <img id="card-icon" src="/profile-icon.png"/>
 </Col>
 </Row>
 </div>
</div>
   );
}

export default Item;

 