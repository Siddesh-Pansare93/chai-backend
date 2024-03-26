import mongoose from "mongoose";

const subscriptionScehma = new mongoose.Schema({
    
    subscriber : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User"
    } ,

    channel : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User"
    }

} , { timestamps : true })


export const Subsciption = mongoose.model("Subscription" , subscriptionScehma)