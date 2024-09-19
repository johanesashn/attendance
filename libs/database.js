import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to db");
    } catch (error) {
        console.log("Error connecting to database: ", error);
        throw new Error("Failed to connect to the database");
    }
}

export default connectMongoDB