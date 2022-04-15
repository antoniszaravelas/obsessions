import {useState} from "react";
import {Link} from "react-router-dom";
import {Form, Row, Col} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { StyledButton, StyledDiv, StyledInput } from "../styles/Forms";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import registerAction from "../actions/registerAction.js";


const RegisterPage = () => {
  
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  const [mes, setMes] = useState("hello");

  // const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.confirmPassword){
      setMessage("Passwords do not match!")
    }else{
      // dispatch(registerAction(inputs.name, inputs.email, inputs.password));
    }
  }


  return (
    <>
      <FormContainer>
      <StyledDiv>
        {message && <Message>{message}</Message>}
        <h1>Sign Up</h1>
        <Form onSubmit = {submitHandler}>
          <Form.Group controlId="name">
                  <Form.Label>Name: </Form.Label>
                  <StyledInput type="text" placeholder="Enter name" onChange={(e)=>setInputs({...inputs, name: e.target.value})}></StyledInput>
          </Form.Group>
          <br/>
          <Form.Group controlId="email">
              <Form.Label>Email Address: </Form.Label>
              <StyledInput type="text" placeholder="Enter email" onChange={(e)=>setInputs({...inputs, email: e.target.value})}></StyledInput>
          </Form.Group>
          <br/>
          <Form.Group controlId="password">
              <Form.Label>Password: </Form.Label>
              <StyledInput type="password" placeholder="Enter password" onChange={(e)=>setInputs({...inputs, password: e.target.value})}></StyledInput>
          </Form.Group>
          <br/>
          <Form.Group controlId="confirmPassword">
              <Form.Label>Password: </Form.Label>
              <StyledInput type="password" placeholder="confirm password" onChange={(e)=>setInputs({...inputs, confirmPassword: e.target.value})}></StyledInput>
          </Form.Group>
          <br/>
          <StyledButton type="submit" variant="primary">
              Register
          </StyledButton>
        </Form>

        <Row className="py-3">
            <Col>
            Have an Account?{"     "} <Link to={`/login`}>Login</Link>
            </Col>
        </Row>
        </StyledDiv>
    </FormContainer> 

    </>
    );
}
 
export default RegisterPage;









   


