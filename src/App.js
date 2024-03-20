import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./moviecard";
//95b8f857

const API_URL = 'https://omdbapi.com?apikey=95b8f857'

const movie1 = {
  "Title": "John Wick",
  "Year": "2014",
  "imdbID": "tt2911666",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
}

function App(){

  const [movies, setMovies] = useState([]);
  const [search, setSearch]= useState('');

  async function searchMovies (title) {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('John Wick')
  },[]
  )

  return (
    <div className="app">
      <h1>It's MovieTime</h1>
      
      <div className="search">
        <input
          placeholder="Search Movies 🎥"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(search)}
        />
      </div>
      {movies?.length>0
        ? (
          <div className="container">
            {movies.map((movie)=>(<MovieCard movie={movie}/>))}
            
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
 
    </div>
  );
}

export default App;
