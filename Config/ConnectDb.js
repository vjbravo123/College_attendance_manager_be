import mongoose from "mongoose"

const connectDB =async (uri) =>{
    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDb Connected Sucessfully on host : ${conn.connection.host}`)
        return conn;
    } catch (error) {
        console.error("Error connecting to database : " , error);
    }
}

export default connectDB;