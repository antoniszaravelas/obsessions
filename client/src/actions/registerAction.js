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

        const {data} = await axios.post(
            "/users/register",
            {name, email, password},
            config
        );

        dispatch({
            type: "USER_REGISTER_SUCCESS",
            payload: data
        })
    }catch(error){
        dispatch({
            type: "USER_REGISTER_FAIL",
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export default register;