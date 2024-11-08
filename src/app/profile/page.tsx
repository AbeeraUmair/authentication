'use client';
import { RedirectToSignIn, useAuth } from '@clerk/nextjs';
import UserProfile from '../components/UserProfile';

const ProfilePage = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className='flex items-center justify-center '> 
      <div className='flex items-center justify-center w-[25rem] m-4 p-2 border border-gray-500 rounded-lg bg-gray-200'>
        <UserProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
