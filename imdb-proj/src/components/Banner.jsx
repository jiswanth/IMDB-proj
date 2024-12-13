import React from 'react'

function Banner() {
  return (
    <div>
      <div className='h-[23vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{ backgroundImage: 'url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)' }}>
        <div className='text-white w-full text-center'>Avengers End Game</div>
      </div>
    </div>
  )
}

export default Banner
