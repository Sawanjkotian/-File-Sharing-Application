import mongoose from "mongoose"

const DBConnection = () =>{

    const MONGODB_URI = 'mongodb+srv://admin:admin@file-sharing-app.6yurkfu.mongodb.net/?retryWrites=true&w=majority';
    try {

        mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
        
    } catch (error) {
        console.error('error while connecting with database', error. message)
    }
}

export default DBConnection;