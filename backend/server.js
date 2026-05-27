import app from "./app.js" ;
import dotenv  from "dotenv";
import Razorpay from "razorpay"
dotenv.config({path:"Backend/config/config.env"});


export const  instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET ,
 
  });

app.listen(process.env.PORT, ()=>{
    console.log(`server started at PORT ${process.env.PORT}`);
});