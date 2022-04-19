import User from "../models/userModel.js";
import generateToken from "../generateToken.js";

const registerUser = async (req,res)=>{
    try{
        const {name, email,password} = req.body;
        const userExists = await User.findOne({email});
        // if the user exists and the passwords match
       if (userExists){
        //    400 => bad request
           res.status(400);
           throw new Error("User Already Exists!");
        }

        // password will be encrypted in some mongoDB middleware
        const user = await User.create({name,email,password});

        if (user) { 
            // 201 => sth was created
            res.status(201).json({
                _id: user._id, 
                name: user.name, 
                email: user.email,
                //  token will change later
                token: generateToken(user._id)
            })
        }else { 
            res.status(400);
            throw new Error("Invalid User Data")
        }
    }catch(error){
        res.status(404).send(error)
        console.log(`There was an error: ${error}`);
    }
}

export default registerUser;