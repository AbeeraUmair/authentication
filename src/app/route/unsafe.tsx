'use client';
import { SignedIn, useUser } from '@clerk/nextjs';
import { useState } from 'react';

export default function UnSafePage() {
    const { user } = useUser(); // Destructure user from useUser
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
        <div>
            <SignedIn>
                {/* Birthday field */}
                <div>
                    <input
                        type="text"
                        placeholder="Enter your birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                    <button onClick={() => handleUpdateMetadata('birthday', birthday)}>
                        Update Birthday
                    </button>
                </div>

                {/* Address field */}
                <div>
                    <input
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <button onClick={() => handleUpdateMetadata('address', address)}>
                        Update Address
                    </button>
                </div>
            </SignedIn>
        </div>
    );
}
