import React ,{ useState } from 'react' ;
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Job.css";
import {Row,Col,Form,Button,Container} from "react-bootstrap";
import * as yup from 'yup';
// import IconButton from '@material/react-icon-button';

// import { BsPlus} from 'react-icons/bs';



    function Job() {


      

        const [validated, setValidated] = useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        }
        //   const { Formik } = Formik;

const schema = yup.object().shape({
firstName: yup.string().required(),
lastName: yup.string().required(),
username: yup.string().required(),
city: yup.string().required(),
state: yup.string().required(),
zip: yup.string().required(),
file: yup.mixed().required(),
terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

    return (
        <body className="Job">
        <Container className="titles-container"> 
        <Row>
        <Col md={{ size: '2', offset: 1 }}> 
        <p id="Title">الوظائف</p>
</Col>
</Row>
<Row>
        <Col md={{ size: '2', offset: 1 }}> 
        <p id="sub-titleee">نعتز ونفخر بكم جميعاً، أبرز خبراتك وبادر بالانضمام إلينا، املأ البيانات أدناه</p>
</Col>

</Row>
</Container>
       <Container className="forms">
                <Row>
                  <Col id="form-title-coll" md={{ size: '2',offset:10 }}>
                        <p id="form-title">طلب التوظيف</p>
                  </Col>
                  </Row>
              <Form noValidate validated={validated} onSubmit={handleSubmit} id="formm">
                <Row className="mb-3">
                 
                  <Col className="form-col" md={{ size: '4' }}>
                  <Form.Group  controlId="validationCustom03">
                    <Form.Label className="labels">الجوال</Form.Label>
                    <Form.Control className="input"
                      required
                      type="number"
                      placeholder="الجوال"
                      defaultValue="009665687696"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  </Col>
                  <Col className="form-col" md={{ size: '4'}}>
                  <Form.Group controlId="validationCustom03">
                    <Form.Label className="labels">الإسم</Form.Label>
                    <Form.Control  className="input"
                      required
                      type="text"
                      placeholder="الإسم"
                      defaultValue="الإسم"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  </Col>
                  </Row>
                  <Row>  
                    <Col  className="form-col" md={{ size: '4' }}>
                  <Form.Group   controlId="validationCustom03">
                    <Form.Label  className="labels">المؤهل</Form.Label>
                    <Form.Control className="input" type="number" placeholder="المؤهل" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  </Col>
                  <Col  className="form-col" md={{ size: '4' }}>
                  <Form.Group   controlId="validationCustom03">
                    <Form.Label  className="labels">البريد الإلكتروني</Form.Label>
                      <Form.Control className="input"
                        type="text"
                        placeholder="البريد الإلكتروني"
                        aria-describedby="inputGroupPrepend"
                        defaultValue="البريد الإلكتروني"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    {/* </InputGroup> */}
                  </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                   
                  <Col  className="form-col" md={{ size: '4' }}>
                  <Form.Group controlId="formFile" className="mb-3" placeholder="تحميل السيرة الذاتية">
    <Form.Label  className="labels">تحميل السيرة الذاتية</Form.Label>
    <Form.Control className="input" type="file"  /> 

  

  </Form.Group>
  </Col>
  <Col  className="form-col" md={{ size: '4' }}>
                  <Form.Group  controlId="validationCustom03">
                    <Form.Label  className="labels">سنوات الخبرة</Form.Label>
                    <Form.Control  className="input" type="number" placeholder="سنوات الخبرة" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  </Col>
                </Row>
               <Row>
                   <Col  md={{ size: '4' }}>
                <Button  type="submit" id="form-button" > إرسال </Button>
                </Col>
                        </Row>
              </Form>

    </Container>  
    </body>      
    
    )};

        
    
      
  export default Job;