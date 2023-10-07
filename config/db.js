import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const {connection}=await mongoose.connect("mongodb://127.0.0.1:27017/blockchain")
        console.log(`Db connected on ${connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB