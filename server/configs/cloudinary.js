import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async ()=>{
    cloudinary.config({
      // Suggested code may be subject to a license. Learn more: ~LicenseLog:1421250634.
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
}
 
export default connectCloudinary