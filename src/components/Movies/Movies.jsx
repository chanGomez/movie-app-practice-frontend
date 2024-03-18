import { useState, useEffect} from 'react'
import axios from "axios"
import Movie from '../Movie/Movie'
import './Index.css'

const API = import.meta.env.VITE_API

function Movies() {
    const [moviesData, setMoviesData] = useState([])

    useEffect(()=>{
        axios.get(`${API}/movies`).then(({data})=>{
          console.log(data)
          setMoviesData(data.payload)
        }).catch(e => console.warn("catch", e))
      },[])
      
  return (
    <div className='movies-container'>
        <h1>Your Movies</h1>
        <div className='card-wrapper'>
            <ul className='ul-cards'>
        {moviesData.map((movie, i)=>{
              return(
                <Movie movie={movie} i={i}/>)})}
            </ul>
        </div>
    </div>
  )
}

export default Movies