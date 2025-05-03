import multer from 'multer'

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3636504133.
const storage = multer.diskStorage({
    
})

const upload = multer({storage})

export default upload