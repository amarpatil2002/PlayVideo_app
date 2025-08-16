import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`mongodb+srv://amarjitpatil2002:Patil2002@cluster0.q1lowwj.mongodb.net/${DB_NAME}`)
        console.log(`Connection succesful`);
    }
    catch(error){
        console.log(`Connect failed : ${error}`);
    }
}

export default connectDB;