import React from 'react'
import MyCard from '../components/MyCard'
import events from '@/data'

function HomePage() {
  return (
    <div>
    {events.map((event, id) => (
      <MyCard 
        key={id}
        image={event.image}
        title={event.title}
        date={event.date}
        location={event.location}
        buttonText={event.buttonText}
        link={event.link}
      />
    ))}
    </div>
  )
}

export default HomePage