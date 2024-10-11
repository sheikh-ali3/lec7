import events from '@/data'
import React, { FC } from 'react'
import Image from 'next/image'

interface EventProps {
  params: {
    name: string;
    id: string;
    // Add other fields here if necessary
  };
}

const Event: FC<EventProps> = ({ params }) => {
  const event = events.find((item) => item.id === params.id);

  return (
    <div>
        <div className='bg-blue-500 py-[150px]'>
          <h1 className='text-black font-bold text-[50px] text-center mt-[-100px]'>{event?.title}</h1>
        </div>
        <div className='bg-white w-[60%] mx-[270px] items-center mt-[-140px] text-black inline-flex'>
          <Image
            src={event?.image || '/default-image.jpg'}
            alt={event?.title || 'Default Alt Text'}
            width={200}
            height={100}
            style={{borderRadius: '50%', margin: 'auto', display: 'block'}}
          />
          <div className='m-14'>         
            <h2 className='text-[30px] text-green-400 ml-[-20px]'>{event?.date}</h2>
            <h3 className='text-red-400 text-[20px]'>{event?.location}</h3>
            <p className='text-[15px] text-center ml-10'>{event?.disription}</p>
        </div>
        </div> 
        
    </div>
  )
};

export default Event