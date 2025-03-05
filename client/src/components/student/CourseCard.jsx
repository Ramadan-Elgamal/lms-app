import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AddContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  const {currency} = useContext(AppContext)
  return (
    <Link to={`/course/${course._id}`} onClick={() => scrollTo(0,0,)} className='border border-gray-500/30 pt-6 overflow-hidden rounded-large '>
      <img src={course.courseThumbnail} alt="" className='w-full '/>
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>{course.educator.name}</p>
        <div className='flex items-center space-x-2'>
          <p>4.5</p>
          <div className='flex'>
            {/* {[...Array(5).map((_,i) => (<img key={i} src={assets.star} alt='' className='w-3.5 h-3.5' />))]} */}
{
Array(5)
    .fill(null) // Initialize the array with 5 elements
    .map((_, i) => (
      <img
        key={i}
        src={assets.star}
        alt="star" // Provide a meaningful alt text
        className="w-3.5 h-3.5"
      />
    ))
}
          </div>
          <p className='text-gray-500'>22</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount * course.coursePrice /100).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCard