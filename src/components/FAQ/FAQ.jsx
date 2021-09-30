import React ,{ useState ,onClick} from 'react' ;
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FAQ.css";
import { Button, Container, Row, Col, Accordion } from "react-bootstrap";
import { Collapse, CardBody, Card } from 'reactstrap';
import {BsChevronDown} from 'react-icons/bs';
import {BsChevronUp} from 'react-icons/bs';




function FAQ(props) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);   
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [arrow1,toggleArrow1]=useState('<BsChevronDown></BsChevronDown>');
  const [arrow2,toggleArrow2]=useState('<BsChevronDown></BsChevronDown>');
  const [arrow3,toggleArrow3]=useState('<BsChevronDown></BsChevronDown>');
  const [arrow4,toggleArrow4]=useState('<BsChevronDown></BsChevronDown>');
  const [arrow5,toggleArrow5]=useState('<BsChevronDown></BsChevronDown>');
  const arrowUp=<img src="../../uparrow-icon.svg" style={{position:'relative', transform:'translateY(50%)', width: "70%"}}></img>;
  const arrowDown=<img src="../../downarrow-icon.svg" style={{position:'relative',transform:"translateY(50%)",width: "70%"}}></img>
  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  const toggle4 = () => setIsOpen4(!isOpen4);
  const toggle5 = () => setIsOpen5(!isOpen5);


   React.useEffect(() => {
    if (isOpen1 === true) {
     toggleArrow1(arrowUp);
    } 
    else {
      toggleArrow1(arrowDown);
    }
    if (isOpen2 === true) {
     toggleArrow2(arrowUp);
    } 
    else {
      toggleArrow2(arrowDown);
    }
    if (isOpen3 === true) {
     toggleArrow3(arrowUp);
    } 
    else {
      toggleArrow3(arrowDown);
    }
    if (isOpen4 === true) {
     toggleArrow4(arrowUp);
    } 
    else {
      toggleArrow4(arrowDown);
    }
    if (isOpen5 === true) {
     toggleArrow5(arrowUp);
    } 
    else {
      toggleArrow5(arrowDown);
    }
    
  }, [isOpen1, isOpen2, isOpen3, isOpen4, isOpen5]);

  return (
  <body className="FAQ">
    <div id="title-div">
      <p id="title">الأسئلة الشائعة</p>
      <p id="subtitle">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم</p>
    </div>
    <Container >
      <Row className="faq-row" >
        <Col md="2" offset="3">
          <Button className="button" id="firsttt-button">
            أسئلة مزود الخدمة
          </Button >
        </Col>
        <Col md="2">
          <Button className="button" id="second-button" >
            أسئلة العميل
          </Button>
        </Col>
        <Col md="2">
          <Button className="button" id="third-button">
            أسئلة عامة
          </Button>
        </Col>
      </Row>
    </Container>
    <Container className="container-dropdowm">
      <Row>
      <Col md={{ size: '6',offset:1}}>
      <div className="dropdown-div">
      <Row className="buttonn" className="button-dropdown" onClick={toggle1} > 
        <Col md="1">
          {arrow1}
        </Col>
        <Col>
        <p className="dropdown-title"> 
       ما هو معيني؟ </p>
        </Col>
        </Row>
      <Collapse isOpen={isOpen1} className="collapse">
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
        </div>
      </Col>
      </Row>
        <Row>
      <Col md={{ size: '6',offset:1}}>
      <div className="dropdown-div">
      <Row className="buttonn" className="button-dropdown" onClick={toggle2} > 
        <Col md="1">
          {arrow2}
        </Col>
        <Col>
        <p className="dropdown-title">لماذا تختار تطبيق معيني لخدمتك؟</p>
        </Col>
        </Row>
      <Collapse isOpen={isOpen2} className="collapse">
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
        </div>
      </Col>
      </Row>
        <Row>
      <Col md={{ size: '6',offset:1}}>
      <div className="dropdown-div">
      <Row className="buttonn" className="button-dropdown" onClick={toggle3} > 
        <Col md="1">
          {arrow3}
        </Col>
        <Col>
        <p className="dropdown-title"> لماذا تختار تطبيق معيني لخدمتك؟</p>
        </Col>
        </Row>
      <Collapse isOpen={isOpen3} className="collapse">
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
        </div>
      </Col>
      </Row>
        <Row>
      <Col md={{ size: '6',offset:1}}>
      <div className="dropdown-div">
      <Row  className="button-dropdown" onClick={toggle4} > 
        <Col md="1">
          {arrow4}
        </Col>
        <Col>
        <p className="dropdown-title">ما هي معايير الحصول على خدمة مميزة أونلاين؟ </p>
        </Col>
        </Row>
      <Collapse isOpen={isOpen4} className="collapse">
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
        </div>
      </Col>
      </Row>
        <Row>
      <Col md={{ size: '6',offset:1}}>
      <div className="dropdown-div">
      <Row className="buttonn" className="button-dropdown" onClick={toggle5} > 
        <Col md="1">
          {arrow5}
        </Col>
        <Col>
        <p className="dropdown-title">من هو العميل (طالب الخدمة)؟</p>
        </Col>
        </Row>
      <Collapse isOpen={isOpen5} className="collapse">
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
        </div>
      </Col>
      </Row>
      
      
      
   
        </Container>
  </body>
);
   
}


export default FAQ;
