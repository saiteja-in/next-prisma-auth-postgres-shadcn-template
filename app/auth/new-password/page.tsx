"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react'

const page = () => {
    const searchParams = useSearchParams();

  const token = searchParams.get("token");
  console.log(token)
  return (
    <div>
      {token}
    </div>
  )
}

export default page
