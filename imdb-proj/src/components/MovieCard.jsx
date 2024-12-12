import React from 'react'


function MovieCard({name,posterPath,movieObject,handleAddtoWatchlist,watchlist}) {
  function doesContain() {
    for(let i=0;i<watchlist.length;i++){
        if(watchlist[i].id===movieObject.id){
          return true
        }
    }
    return false
  }

  return (
    <div className='h-[45vh] w-[180px] bg-cover bg-center flex items-end rounded-xl hover:scale-110 duration-300' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${posterPath})`}}>

      {doesContain(movieObject)?(
          <div className="m-4 flex justify-center items-center ">&#10060;</div>
      ):(
        <div onClick={()=>handleAddtoWatchlist(movieObject)} className="m-4 flex justify-center items-center ">&#128525;</div>
      )}

      {/* <div onClick={()=>handleAddtoWatchlist(movieObject)} className="m-4 flex justify-center  items-center ">&#128525;</div> */}
      <div className='text-white text-xl w-full text-center bg-gray-500/60 rounded-xl p-2'>{name}</div>
    </div>
  )
} 

export default MovieCard
