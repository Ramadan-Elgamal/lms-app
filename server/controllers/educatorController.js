import {clerkClient} from "@clerk/express"
import Course from "../models/Course.js"
import {v2 as cloudinary} from 'cloudinary'
import { Purchase } from "../models/Purchase.js"

//funtion to update user role to educator
export const updateRoleToEducator = async (req,res)=>
{
    try{
        const userId = req.auth.userId
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator'
            }
        })
        res.json({success: true, message: 'you can publish a course now'})
    } catch (error){
        res.json({success: false, message: 'something went wrong'})
    }
}

//add new course
export const addCourse = async (req, res)=> {
    try {
        const { courseData} = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId
        if(!imageFile) {
           return res.json({success: false, message: 'thumbnail is not attached'})
        }
        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save()
        res.json({success: true, message: 'course added successfully'})
    } catch (error) {
        res.json({success: false, message: 'something went wrong'})
    }
}

// get educator courses
 export const getEducatorCourses = async (req, res)=> {
    try {
        const educatorId = req.auth.userId
        const courses = await Course.find({educator})
        res.json({success: true, courses})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
 
// get educator dashboard data, total earnings, enrolled students, no. of courses
export const educatorDashboardData = async (req,res)=> {
    try {
        const educator = req.auth.userId
        const courses = await Course.find({educator})
        const totalCourses = courses.length

        const courseIds = courses.map(course => course._id)
        
        const purchases = await Purchase.find({
            courseId : {$in: courseIds},
            status: 'completed'
        })

        const totalEarnings = purchases.reduce((sume,purcahse) => sum + purchasee.amount, 0)

        const enrolledStudentsData = []
        for(const course of courses){
            const students = await User.find({
                _id: {$in: course.enrolledStudents}
            }, 'name imageUrl')

            students.forEach(student => {
                enrolledStudentsData.push({
                    courseTitle: course.courseTitle,
                    student
                })
            })
            res.json({success: true, dashboardData: {
                totalCourses,
                totalEarnings,
                enrolledStudentsData
            }})
        }
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

//get enrolled students data with purchase data

export const getEnrolledStudentData = async (req,res)=>{
    try {
        const educator = req.auth.userId   
        const courses = await course.find({educator})
        const courseIds = courses.map(course => course._id)
        const purchases = await Purchase.find({
            courseId: {$in: courseIds},
            status: 'completed'
        }).populate('userId','name imageUrl').populate('courseId', 'courseTitle')

        const enrolledStudents = purchases.map(purchase => ({
            student: purchase.userId,
            courseTitle: purchase.courseId.courseTitle,
            purchaseDate: purchase.createdAt
        }))

// Suggested code may be subject to a license. Learn more: ~LicenseLog:843464501.
        res.json({success: true, enrolledStudents})
        
    } catch (error) {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:864517797.
        res.json({success: false, message: error.message})
    }
}