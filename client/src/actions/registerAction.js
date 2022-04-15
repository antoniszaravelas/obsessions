import axios from "axios";

const register = (name,email,password) => async(dispatch) => {
    try{
        dispatch({
            type: "USER_REGISTER_REQUEST"
        });

        const config  = {
            headers: {
                "Content-Type": "application/json"
            }
        };
    }catch(error){
        console.log(`There was an error registering the user: ${error}`)
    }
}

export default register;