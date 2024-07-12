import User from "../models/User";
import { connectDB } from "../mongoose/connetDB";

export const createOrUpdateUser = async(id, first_name, last_name , image_url, email_addresses, username) =>{
    try {
        await connectDB()
        console.log('123')
        const UserId = await User.findOne({clerkId: id})
        console.log('id',UserId)
        if(UserId){
            const data = await User.create({
                clerkId: id,
                firstName:first_name,
                lastName: last_name,
                profilePhoto : image_url,
                email: email_addresses,
                userName : username
            })
            await data.save()
        }
    } catch (error) {
        console.log('error',error)
    }
}

export const deleteUser = async(id)=>{
    try {
        await connectDB()
        await User.findOneAndDelete({clerkId: id})
    } catch (error) {
        console.log('delete error',error)
    }
}