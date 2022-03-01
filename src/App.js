import React from 'react';
import  { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import { moviesData } from './Components/Data/Data';
import MovieList from './Components/MovieList/MovieList';
import NavBarr from './Components/Navbar/Navbar';
import FilterByRate  from '../src/Components/Rate/Rate' ;


  function App() {
    const [movies, setMovies] = useState(moviesData)
    const [inputSearch, setInputSearch] = useState("")
    const [rating, setRating] = useState(0)
    const add =(newMovie) =>{
      setMovies([...movies, newMovie])
    }


    return (
      <div className="App">
        <NavBarr inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <FilterByRate rating={rating} setRating={setRating} />
        <MovieList movies = {movies} inputSearch={inputSearch} isMovieRating={false} rating={rating} /> 
        <AddMovie add = {add}/>
      </div>
    );
  }

export default App;
