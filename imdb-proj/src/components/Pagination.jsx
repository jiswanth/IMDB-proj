import React from 'react'

function Pagination({NextPageFn,PrevPageFn,PageNumber}) {
  return (
    <div className='bg-gray-400 h-[50px] w-full mt-8 flex justify-center p-3'> 
      <div onClick={PrevPageFn} className='px-4'><i class="fa-solid fa-arrow-left"></i></div>
      <div>{PageNumber}</div>
      <div onClick={NextPageFn} className='px-4'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
