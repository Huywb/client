import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false

export const connectDB =async ()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('Mongoose already connected')
    }
    try {
        const connect = await mongoose.connect(process.env.MONGOOSE_URL?  process.env.MONGOOSE_URL : ``,{
            dbName: "VSocial",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)
        if(connect){
        isConnected = true
        console.log("MongooseDB connected")
        }
    } catch (error) {
        console.log("Something wrong",error)
    }

}