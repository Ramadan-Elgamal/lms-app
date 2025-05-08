import express from 'express'
import { addUserRating, getUserCourseProgress, getUserData, purchaseCourse, userEnrolledCourses } from '../controllers/userController.js'
import { updateRoleToEducator } from '../controllers/educatorController.js'


const userRouter = express.Router()

userRouter.get('/data', getUserData)
userRouter.get('/enrolled-courses', userEnrolledCourses)
userRouter.post('/purchase', purchaseCourse)
userRouter.post('/update-course-progress', updateRoleToEducator)
userRouter.post('/get-course-progress', getUserCourseProgress)
//this is get not post
userRouter.post('/add-rating', addUserRating)

export default userRouter

