import React ,{ useState } from 'react' ;
import ReactDOM from 'react-dom';
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Partners.css";
import "./form.css";
import {Row,Col,Form,Button,Container} from "react-bootstrap";
import * as yup from 'yup';
import { Input } from 'react-input-component';
import { BsPlus} from 'react-icons/bs';
import { useFilePicker } from 'react-sage'

function Registration() {
  // const [file,upload]=useState[]
  const [validated, setValidated] = useState(false);
  const { files, onClick, HiddenFileInput } = useFilePicker()

  

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

  const [arialabel1,title1]=useState(false);
  const [arialabel2,title2]=useState(false);
  const [arialabel3,title3]=useState(false);
  const toggle1 = () => title1(!arialabel1);
  const toggle2 = () => title2(!arialabel2);
  const toggle3 = () => title3(!arialabel3);
  const[color1,titleChangeColor1]=useState("#969696");
  const[color2,titleChangeColor2]=useState("#969696");
  const[color3,titleChangeColor3]=useState("#969696");

  React.useEffect(() => {

    if (arialabel1 === true) {
     titleChangeColor1("#000000");
    } 
    else {
      titleChangeColor1("#969696");
    }
    if (arialabel2 === true) {
      titleChangeColor2("#000000");
     } 
     else {
       titleChangeColor2("#969696");
     }
     if (arialabel3 === true) {
      titleChangeColor3("#000000");
     } 
     else {
       titleChangeColor3("#969696");
     }
  }, [arialabel1,arialabel2,arialabel3]);


  return (

  <Container className="formss">
    <Row>
      <Col id="form-title-coll" md={{ size: '3',offset:4 }}>
            <p id="form-title"> التسجيل كشركة </p>
      </Col>
    </Row>
    <Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit} id="formmm">
        <Row >
          <Col className="form-coll" md={{ size: '4' }}>
            <Form.Group  controlId="validationCustom03">
              <Form.Label id="gawal">الجوال</Form.Label>
              <Form.Control className="input"
                required
                type="number"
                placeholder="009665687696"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="form-coll" md={{ size: '4'}}>
            <Form.Group controlId="validationCustom03">
            <Form.Label className="labels"  defaultValue="" >إسم الشركة</Form.Label>
            <Form.Control  className="input"
              required
              type="text"
              placeholder="إسم الشركة"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>  
          <Col  className="form-coll" md={{ size: '4' }}>
            <Form.Group   controlId="validationCustom03">
              <Form.Label  className="labels">البريد الإلكتروني</Form.Label>
              <Form.Control className="input" type="mail" placeholder="البريد الإلكتروني"  defaultValue="" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col  className="form-coll" md={{ size: '4' }}>

<Form.Group   controlId="validationCustom03">
    <Form.Label  className="labels">الدولة  </Form.Label>
   <Form.Select  className="input" aria-label="السعودية " style={{color: color1}}  onChange={toggle1}  >
<option className="option">  السعودية </option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select>
</Form.Group>
 </Col>
        </Row>
        <Row>
        <Col className="form-coll" md={{ size: '4' }}>
            <Form.Group  controlId="validationCustom03">
            <Form.Label  className="labels">الموقع الإلكتروني (اختياري) </Form.Label>
            <Form.Control  className="input" type="email" placeholder="الموقع الإلكتروني "   aria-describedby="inputGroupPrepend"  defaultValue="" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="form-coll" md={{ size: '4' }}>
          <Form.Group controlId="validationCustom03">
          {/* <Form.Control  required /> */}
    <Form.Label  className="labels">المدينة  </Form.Label>
   <Form.Select  className="input" style={{color:color2}} onChange={toggle2}  aria-label="الرياض " >
<option className="option"> الرياض </option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select>
</Form.Group>
 </Col>
        </Row>
        <Row>  
          <Col  className="form-coll" md={{ size: '4' }}>
            <Form.Group   controlId="validationCustom03">
              <Form.Label  className="labels">اسم الشخص المفوض </Form.Label>
              <Form.Control className="input" type="text" placeholder=" اسم الشخص المفوض"  defaultValue="" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col  className="form-coll" md={{ size: '4' }}>  
            <Form.Group   controlId="validationCustom03">
              <Form.Label  className="labels"> العنوان بالكامل (اختياري)</Form.Label>
                <Form.Control className="input"
                  type="text"
                  placeholder="شارع الميدان   "
                  aria-describedby="inputGroupPrepend"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              {/* </InputGroup> */}
            </Form.Group>
          </Col>
        </Row>
        <Row>  
          <Col  className="form-coll" md={{ size: '4' }}>
         <Form.Group   controlId="validationCustom03">
             <Form.Label  className="labels">نوع النشاط </Form.Label>
            <Form.Select  className="input" aria-label="نوع النشاط"  onChange={toggle3} style={{color:color3}}>          
  <option className="option">إختر نوع النشاط</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
</Form.Group>
          </Col>   
          <Col  className="form-coll" md={{ size: '4' }}>  
            <Form.Group controlId="validationCustom03">
              <Form.Label  className="labels"  > رقم السجل التجاري (اختياري)</Form.Label>
                <Form.Control className="input"
                  type="number"
                  placeholder="34344324"
                  aria-describedby="inputGroupPrepend"
                  defaultValue="" />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              {/* </InputGroup> */}
            </Form.Group>
          </Col>
        </Row>
        <Row>  
        <Col  className="form-coll" md={{ size: '4' }}>
                  <Form.Group controlId="formFile" className="mb-3" placeholder=" تحميل السجل التجاري (اختياري) ">
    <Form.Label  className="labels">تحميل السجل التجاري   </Form.Label>
    <Form.Control className="input" type="file" style={{display:"none"}} /> 
    <Row  style={{width:"199px" , border:"solid 1px #d8d8d8", borderRadius: "8px",marginLeft: "1%",padding: "2% 1% 2% 1%"}}>
     
      <Col md="2">
      {files?.map((file: any) => <div key={file.name}>{file.name}</div>)}
      <BsPlus onClick={onClick} style={{top: "50%",transform: "translateY(-50%)", position: "relative"}}></BsPlus>
      </Col>
      <Col md="10">
      <p className="upload">تحميل السجل التجاري</p>
      </Col>
       <HiddenFileInput />
    </Row>
  </Form.Group>
  </Col>
          <Col  className="form-col" md={{ size: '4' }}>  
            <Form.Group   controlId="validationCustom03">
              <Form.Label  className="labels"  >رقم الإتصال </Form.Label>
                <Form.Control className="input"
                  type="number"
                  placeholder=  "009665687696 "
                  aria-describedby="inputGroupPrepend"
                  defaultValue=""
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
          <Col  md={{ size: '4' }}>
            <Button  type="submit" id="form-buttonn" > إرسال طلب إنضمام </Button>
          </Col>
        </Row>
      </Form>
    </Row>
  </Container>

  )
}

export default Registration ;
  