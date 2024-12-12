import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"
import { useEffect, useState } from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { MovieContext } from "./components/MovieContext"

function App() {
 
  const [watchlist,setWatchlist]=useState([])

  const handleAddtoWatchlist=(movieObj)=>{
    let updatedWatchlist=[...watchlist,movieObj]
    setWatchlist(updatedWatchlist)
    localStorage.setItem('movies',JSON.stringify(updatedWatchlist))
    console.log(updatedWatchlist)
  }

  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem('movies')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <div>
      <BrowserRouter>
       <MovieContext.Provider>

        <NavBar/>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
              <Banner/> 
              <Movies handleAddtoWatchlist={handleAddtoWatchlist} watchlist={watchlist} /></>}/> 
          <Route path="/watchlist" element={<WatchList watchList={watchlist} setWatchList={setWatchlist}/>}/>
        </Routes>
        </MovieContext.Provider> 
      </BrowserRouter>
    </div>

  )
}

export default App
