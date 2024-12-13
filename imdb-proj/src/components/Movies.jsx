import React, { useEffect,useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';

function Movies() {

    const[movies,setMovies]=useState([]);
    const[pageNo,setPageNo]=useState(1);

    const handleNext=()=>{
        setPageNo(pageNo+1)
    };

    const handlePrevious=()=>{
        if(pageNo===1){
            setPageNo(pageNo)
        }
        setPageNo(pageNo-1)
    };

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=8fb2f624c696243797fae7c2b094162d&language=en-US&page=${pageNo}`)
        .then(function(res){
            console.log(res.data.results)
            setMovies(res.data.results)
        });
    },[pageNo]);

  return (
    <div>
        <div className='2-xl text-center font-bold m-5'>
            <h1>Trending Movies</h1>
        </div>

        <div className='flex gap-7 justify-evenly flex-wrap'>
            {movies.map((movieObj)=>{
                    return (<MovieCard 
                             name={movieObj.title} 
                             posterPath={movieObj.poster_path}
                             movieObject={movieObj}
                            //  handleAddtoWatchlist={handleAddtoWatchlist}
                            //  watchlist={watchlist}
                             /> 
                    );
                })}
            
            <Pagination NextPageFn={handleNext} PrevPageFn={handlePrevious} PageNumber={pageNo}/>
        </div>
    </div>
  )
}

export default Movies
