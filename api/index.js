import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

import authRoute from "./routes/auth.js"
import pitchRoute from "./routes/pitch.js"
import teamsRoute from "./routes/teams.js"
import userRoute from "./routes/user.js"
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
  } catch (err) {
    throw err;
  }
}

mongoose.connection.on('disconnected', ()=>{
  console.log("MongoDb disconnected!")
})

mongoose.connection.on('connected', ()=>{
  console.log("MongoDB connected!")
})

//
app.use(express.json())
app.use(cookieParser())
// middleware
app.use('/api/auth', authRoute)
app.use('/api/pitch', pitchRoute)
app.use('/api/teams', teamsRoute)
app.use('/api/user', userRoute)

app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

app.listen(8080,()=>{
  connect()
})