import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// استيراد الصفحات
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/student/Navbar';

const App = () => {
  const location = useLocation();
  const isEducatorRoute = location.pathname.startsWith('/educator');

  return (
    <div className="text-default min-h-screen bg-white">
      {/* إظهار Navbar فقط لو مش في educator */}
      {!isEducatorRoute && <Navbar />}

      <Routes>

        {/* مسارات الطالب */}
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* مسارات المعلم */}
        <Route path="/educator" element={<Educator />}>
          {/* لما يدخل /educator بدون تحديد صفحة، نحوله تلقائيًا على /educator/dashboard */}
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-courses" element={<AddCourse />} />

          <Route path="my-courses" element={<MyCourses />} />

          <Route path="student-enrolled" element={<StudentsEnrolled />} />

        </Route>

      </Routes>
    </div>
  );
};

export default App;
