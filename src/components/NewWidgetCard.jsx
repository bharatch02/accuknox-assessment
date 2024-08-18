import React from 'react'

function NewWidgetCard({title , description}) {
  return (
    <div className='bg-white h-48 w-96'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default NewWidgetCard
