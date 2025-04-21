import React from 'react'
import Hero from '../Components/Hero'
import { useLoaderData } from 'react-router'
import PhoneContainer from '../Components/PhoneContainer'

const Home = () => {
  const data = useLoaderData() 
  console.log(data);
  
  return (
    <div>
      <Hero />

      <PhoneContainer phones={data} />
      
    </div>
  )
}

export default Home
