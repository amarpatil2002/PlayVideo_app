import dotenv from "dotenv";
import connectDB from "./db/connection.js";

dotenv.config({path:'./env'})

connectDB().then(() => {
    console.log(`Connection successful`);
}).catch((err) => {
    console.log(`Connection error ${err}`);
})