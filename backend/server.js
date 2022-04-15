import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";
import usersRoute from "./routes/usersRoute.js";
import mongoose from "mongoose";

const app = express();
app.use(cors());

dotenv.config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/users", usersRoute)

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"));
}


mongoose.connect(`${process.env.MONGO_URI}`)
.then(()=> console.log(`DB Connected Successfully`))
.catch(e=>console.log(`There was an error : ${e}`));



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }
  

app.listen(`${process.env.PORT}`, ()=>{
    console.log(`Server started on port ${process.env.PORT | 8081}`)
})