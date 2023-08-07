import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MondoDB is already Connected!');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DATABASE_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
        console.log('MongoDB Connected!')
    } catch (error) {
        console.log(error)
    }
}