import React from 'react'
import PhonesCard from './PhonesCard';

const PhoneContainer = ({phones}) => {
  console.log(phones);
  
  return (
    <div className='py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <PhonesCard/>
          <PhonesCard/>
          <PhonesCard/>
          <PhonesCard/>
      </div>
      
    </div>
  )
}

export default PhoneContainer
