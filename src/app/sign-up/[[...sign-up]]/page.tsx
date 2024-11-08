'use client'
import { SignUp } from '@clerk/nextjs'

export default function Page() {

  
  return ( 
  
    <div className='flex items-center justify-center'>
<SignUp 
    appearance={{
        elements: {
          formButtonPrimary: {
            fontSize: 14,
            textTransform: 'none',
            color: '#fff',
            backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)', // Tailwind's blue-500 to purple-500 gradient
            transition: 'background 0.3s ease',
            '&:hover, &:focus, &:active': {
            backgroundImage: 'linear-gradient(to right, #2563eb, #7c3aed)', // Tailwind's blue-600 to purple-600 gradient
            },
          },
          formField: {
           Address: {
              placeholder: 'Enter your address',
            },
          },
        },
      }}
    />
    </div>
    )
};