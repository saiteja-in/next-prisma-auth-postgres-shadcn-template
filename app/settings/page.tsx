import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'



const page = async() => {
    const session=await auth()
    console.log(session)
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      {session?.user?.id}
      <form action={async()=>{
        "use server"
        await signOut();
      }}>
        <Button type='submit'>Sign out</Button>
      </form>
    </div>
  )
}

export default page
