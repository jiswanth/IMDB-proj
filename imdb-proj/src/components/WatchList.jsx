import React, { useEffect, useState } from 'react'
import genreids from '../utility/genre'
import { useContext } from 'react'
import { MovieContext } from './MovieContext'

function WatchList() {

  const {watchlist,setWatchlist}=useContext(MovieContext)
  const [search,setSearch]=useState('')
  const [genreList,setGenreList]=useState([])
  const [currGenre,setCurrGenre]=useState('All Genres')

  const handleSearch=(e)=>{
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const handleFilter=(genre)=>{
      setCurrGenre(genre)
  }



  useEffect(()=>{
    let temp=watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })

    temp=new Set(temp)

    console.log(temp)
    // setGenreList(temp)
    setGenreList(['All Genres',...temp])
  },[watchlist])

  const handleAscending=()=>{
    let sortedAscending=watchlist.sort((movieObjA,movieObjB)=>{
      return movieObjA.vote_average-movieObjB.vote_average
    })

    setWatchlist([...sortedAscending])
  }

  const handleDescending=()=>{
    let sortedDescending=watchlist.sort((movieObjA,movieObjB)=>{
      return movieObjB.vote_average-movieObjA.vote_average
    })

    setWatchlist([...sortedDescending])
  }



  return (
    <>

    <div className='flex justify-center'>
      {genreList.map((genre)=>(
          <div onClick={()=>handleFilter(genre)} className={currGenre===genre ?'flex justify-center items-center rounded-xl bg-blue-400 h-[3rem] w-[9rem] m-4 text-white font-bold':"flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"}>{genre}</div>
      ))}
      
    </div>

    {/* Search List */}
    <div className='flex justify-center '>
      <input placeholder="Search Movies" className=" h-[40px] w-[280px] bg-gray-200 rounded-xl px-4 m-4" type="text" onChange={handleSearch} value={search}/>
    </div>

    {/* WatchList Table */}
    <div className='m-8'>
      <table className='w-full text-center'>
        <thead className='border border-gray-200 bg-gray-200'>
          <tr>
          <th>Name</th>
          <th> <i onClick={handleAscending} class="fa-solid fa-arrow-up"></i> Ratings <i onClick={handleDescending} class="fa-solid fa-arrow-down"></i></th>
          <th>Popularity</th>
          <th>Genre</th>
          <th>Delete Movies</th>
          </tr>
          
        </thead>

        <tbody>
          {watchlist.filter((movieObj)=>{
            if(currGenre==='All Genres'){
              return true
            }
            else{
              return genreids[movieObj.genre_ids[0]]===currGenre
            }
          })
          .filter((movieObj)=>(
            movieObj.title.toLowerCase().includes(search)
          ))
          .map((movieObj)=>(
              <tr className='border-b-2' key={movieObj}>
              <td className='flex items-center px-4 py-5'>
                <img className="h-[100px] w-[90px]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                <div className='mx-6'>{movieObj.title}</div>
              </td>
              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>{genreids[movieObj.genre_ids[0]]}</td>
              <td className='text-red-500'>Delete</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
    
    </>
  )
}

export default WatchList
