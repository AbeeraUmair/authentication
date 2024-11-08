'use client'

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex items-center justify-center'>
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: {
            fontSize: 14,
            textTransform: 'none',
            color: '#fff',
            backgroundImage: 'linear-gradient(to right, #60a5fa, #a855f7)', // Tailwind's blue-500 to purple-500 gradient
            transition: 'background 0.3s ease',
            '&:hover, &:focus, &:active': {
              backgroundImage: 'linear-gradient(to right, #2563eb, #7c3aed)', // Tailwind's blue-600 to purple-600 gradient
            },
          },
        },
      }}
    />
    </div>
  );
};
