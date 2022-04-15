import {Link} from "react-router-dom";
import {Form, Row, Col} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { StyledDiv, StyledInput, StyledButton } from "../styles/Forms";


const LoginPage = () => {

    


    return ( 
        <>
            <FormContainer>
                <StyledDiv className="loginScreen">
                    <h1>Sign In</h1>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address: </Form.Label>
                            <StyledInput type="text" placeholder="Enter email"></StyledInput>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="password">
                            <Form.Label>Password: </Form.Label>
                            <StyledInput type="password" placeholder="Enter password"></StyledInput>
                        </Form.Group>
                        <br/>
                        <StyledButton type="submit" variant="primary">
                            Sign In
                        </StyledButton>
                    </Form>

                    <Row className="py-3">
                        <Col>
                        New Customer?{" "} <Link to={`/register`}>Register</Link>
                        </Col>
                    </Row>
                </StyledDiv>
            </FormContainer>
        </>
        );
}
 
export default LoginPage;