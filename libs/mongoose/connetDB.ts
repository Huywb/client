import mongoose from "mongoose";

let isConnected = false

export const connectDB =async ()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log("Cannot connect DB") 
        return
    }
    try {
        const connect = await mongoose.connect(process.env.MONGOOSE_URL?  process.env.MONGOOSE_URL : ``,{
            dbName:"VSocial",
        })
        if(connect){
        isConnected = true
        console.log("MongooseDB connected")
        }
    } catch (error) {
        console.log("Something wrong",error)
    }

}