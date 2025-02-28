import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/courses-list' element={<CoursesList />} />
        <Route path='/courses-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element= {<Educator />}>
          <Route path='/educaoe' element={<Dashboard />}></Route>
          <Route path='/add-course' element={<AddCourse />}></Route>
          <Route path='/my-courses' element={<MyCourses />}></Route>
          <Route path='/students-enrolled' element={<StudentsEnrolled />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App