'use client'
import { useUser } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { useState } from 'react';

const UserProfile = () => {
    const { user } = useUser();
    const [birthday, setBirthday] = useState('');
    const [address, setAddress] = useState('');

    const handleUpdateMetadata = async (field: string, value: string) => {
        if (user) {
            await user.update({
                unsafeMetadata: {
                    ...user.unsafeMetadata,
                    [field]: value,
                },
            });
        }
    };

    return (
        <div className='' >
            <h1 className='font-bold mb-5 text-md'>Personal Information</h1>
            <hr/>
            <div className='flex justify-between items-center my-5'>
                Birthday  {user?.publicMetadata.Birthday as ReactNode}
                <div>
                    <input
                        type="date"
                        placeholder="Enter your birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                    </div>
                    <div>
                    <button onClick={() => handleUpdateMetadata('birthday', birthday)}>
                        Update Birthday
                    </button>
                </div>
            </div>
            <hr/>

            <div className='flex justify-between items-center my-5'>
                Address {user?.publicMetadata.Address as ReactNode}
                <div>
                    <input
                    className='p-4 mx-2'
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                     </div>
                     <div>
                    <button onClick={() => handleUpdateMetadata('address', address)}>
                        Update Address
                    </button>
                
                </div>
               
            </div>
            <hr/>
        </div>
    )
};

export default UserProfile;

