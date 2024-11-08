'use client'

import { UserButton } from '@clerk/nextjs'
import UserProfile from './UserProfile'
import { FaRegUserCircle } from "react-icons/fa";
export default function Custom() {
  return (
    <header>
      <div className='flex justify-end items-center m-5 '>
      <UserButton >
        {/* You can pass the content as a component */}
        <UserButton.UserProfilePage label="Personal Info" url="custom" labelIcon={<FaRegUserCircle />}>
          <UserProfile/>
        </UserButton.UserProfilePage>

        {/* You can also pass the content as direct children */}
        {/* <UserButton.UserProfilePage label="Terms" labelIcon={<DotIcon />} url="terms">
          <div>
           <UserProfile/>
          </div>
        </UserButton.UserProfilePage> */}
      </UserButton>
      </div>
    </header>
  )
}