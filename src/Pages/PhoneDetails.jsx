import React from 'react'
import { useLoaderData } from 'react-router'

const PhoneDetails = () => {
  const data  = useLoaderData()
  console.log(data);
  
  return (
    <div>
      Phone Details
    </div>
  )
}

export default PhoneDetails
