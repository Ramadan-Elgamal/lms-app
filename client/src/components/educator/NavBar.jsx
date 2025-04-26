import React from 'react'
import {assets, dummyEducatorData} from '../../assets/assets'
import { UserButton, useUser} from '@clerk/clerk-react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const educatorData = dummyEducatorData
const { user }= useUser()


return (
  <div className='w-full flex items-center justify-between  border-b border-gray-500 py-3 px-1 md:px-10
'>
    {/* Logo Section */}
    <Link to='/'>
      <img src={assets.logo} alt="Logo" className='w-28 lg:w-32' />
    </Link>

    {/* User Info Section */}
    <div className='flex items-center gap-5 text-gray-500'>
      <p className='text-sm'>Hi! {user ? user.fullName : 'Developers'}</p>
      {user ?  <UserButton />
       : <img className='w-8 h-8 rounded-full object-cover' src={assets.profile_img} alt="Profile" />
      }
    </div>
  </div>
)


}
export default NavBar