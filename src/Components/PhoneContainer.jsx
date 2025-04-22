import React from 'react'
import PhonesCard from './PhonesCard';

const PhoneContainer = ({phones}) => {
  
  return (
    <div className='py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {phones.map(phone => (
            <PhonesCard key={phone.id} phone={phone} />
          ))}
      </div>
      <button>Show All</button>
    </div>
  )
}

export default PhoneContainer
