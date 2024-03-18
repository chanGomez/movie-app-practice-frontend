import { useState } from 'react'
import Movies from './components/Movies/Movies'
import Movie from './components/Movie/Movie'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import NewMovieForm from './components/NewMovieForm/NewMovieForm'
import EditMovieForm from './components/EditMovieForm/EditMovieForm'
import MovieDetails from './components/MovieDetails/MovieDetails'

function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/new' element={<NewMovieForm/>}/>
      <Route path='/movies/:id/edit' element={<EditMovieForm/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
