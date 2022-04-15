import {Form, Button} from "react-bootstrap";
import styled from "styled-components";


const StyledButton = styled(Button)`
background-color:black;
border: none;
&:hover{
    background-color: grey;
}
`

const StyledInput = styled(Form.Control)`
border-top: 0;
border-left:0;
border-right:0;
border-radius: 0;

`;

const StyledDiv = styled.div`
margin-top:50px;
padding: 10px;
`

export {StyledButton, StyledInput, StyledDiv};