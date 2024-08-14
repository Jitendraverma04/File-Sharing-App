import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {

    const MONGO_URI = `mongodb+srv://User:${process.env.Password}@fileshare.slgmrov.mongodb.net/?retryWrites=true&w=majority&appName=Fileshare`;
    try  {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true ,
            useUnifiedTopology: true, });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
