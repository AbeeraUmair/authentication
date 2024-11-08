'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'

export const completeOnboarding = async (formData: FormData) => {
  const { userId } = await auth();

  if (!userId) {
    return { message: 'No Logged In User' }
  }
  try {
    await (await clerkClient()).users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        applicationName: formData.get('CountryName'),
        applicationType: formData.get('CurrencyType'),
      },
    })
    return { message: 'User metadata Updated' }
  } catch (e) {
    console.log('error', e)
    return { message: 'Error Updating User Metadata' }
  }
}