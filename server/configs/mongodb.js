import mongoose from "mongoose";

//connect to the data   
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3857961475.
const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log('database connected'))

    await mongoose.connect(`${process.env.MONGODB_URL}/lms`)
}

export default connectDB