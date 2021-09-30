import React ,{ useState } from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import {Row,Col,Form,Button,Container,InputGroup} from "react-bootstrap";
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
    Message: yup.string().required(),
    Name: yup.string().required(),
    email: yup.string().required(),
    topic: yup.string().required(),
  }); 

function ContactUs()   {
 return (

     <Container className="ContactUs-container">
                    <div id="title-div">
        <p id="title-form">تواصل معنا الأن </p>
      </div>
          <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        Name: '',
        Message: '',
        email: '',
       topic: '',
       
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
  
 <Form noValidate onSubmit={handleSubmit}>
        <Row>
            <Col md={{ size: '4'}} >
                <Form.Group controlId="validationFormik101" className="position-relative" >
                    <Form.Label controlId="validationCustom03" className="labels" >الرسالة</Form.Label>
                    <Form.Control className="input" id="message"
                        type="text"
                        placeholder="إكتب رسالتك هنا"  
                        onChange={handleChange}
                        // isValid={touched.Message && !errors.Message}
                        required
                        isInvalid={!!errors.Message}
                    />
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
            </Col>
            <Col md="6">
                <Row>
                    <Col>
                    <Form.Group controlId="validationFormik102" className="position-relative">
                        <Form.Label className="labels">الإسم</Form.Label>
                        <Form.Control className="input"
                            type="text"
                            placeholder="الإسم"  
                            onChange={handleChange}
                            isValid={touched.Name && !errors.Name}
                            isInvalid={!!errors.Name}
                            required
                        />

                         <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="input"
                    controlId="validationFormik102"
                    className="position-relative"
                    >
                    <Form.Label className="labels" id="email">البريد الإلكتروني</Form.Label>
                    <Form.Control className="input"
                        type="email"
                        placeholder="البريد الإلكتروني"  
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                        isInvalid={!!errors.email}
                        required
                    />

                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="input"
                        controlId="validationFormik102"
                        className="position-relative"
                        >
                        <Form.Label  className="labels">الموضوع</Form.Label>
                        <Form.Control className="input"
                            type="text"
                            placeholder="الموضوع"  
                            onChange={handleChange}
                            isValid={touched.topic && !errors.topic}
                            isInvalid={!!errors.topic}
                            required
                        />

                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                     

                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col id="buttons-col">
                
                <Button type="submit" id="secondd-button">
                    <Row>
                        <Col md>
                        <p id="second-button-title">عبر البريد</p>
                      
                        <p id="second-button-subtitle">mueeny@info.com</p>
                        </Col>
                        <Col md>
                        <img id="second-button-img" src="/email-icon.png"/>
                            </Col>
                       
                        </Row>
                 
                    </Button>
                    <Button type="submit" id="firstt-button">إرسال</Button>
            </Col>
        </Row>
 </Form>
           )}
           </Formik>
        </Container>
      )}


export default ContactUs;