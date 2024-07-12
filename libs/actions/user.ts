import User from "../models/User";
import { connectDB } from "../mongoose/connetDB";

export const createOrUpdateUser = async(id: string, first_name: string | null, last_name: string | null, image_url: string, email_addresses: unknown, username: string | null)=>{
    try {
        await connectDB()
        console.log('123')
        const user = await User.findOneAndUpdate(
            {clerkId: id},
            {
                $set:{
                    firstName:first_name,
                    lastName: last_name,
                    profilePhoto : image_url,
                    email: email_addresses,
                    userName : username
                }
            },
            {upsert:true,new:true}
        )
        await user.save()
    } catch (error) {
        console.log('error',error)
    }
}

export const deleteUser = async(id:string)=>{
    try {
        await connectDB()
        await User.findOneAndDelete({clerkId: id})
    } catch (error) {
        console.log('delete error',error)
    }
}