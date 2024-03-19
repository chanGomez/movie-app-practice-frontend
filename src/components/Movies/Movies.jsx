import { useState, useEffect} from 'react'
import { useNavigate} from "react-router-dom"
import axios from "axios"
import Movie from '../Movie/Movie'
import './Index.css'

const API = import.meta.env.VITE_API

function Movies() {

  const navigate = useNavigate()
    const [moviesData, setMoviesData] = useState([])

    useEffect(()=>{
        axios.get(`${API}/movies`).then(({data})=>{
          console.log(data)
          setMoviesData(data.payload)
        }).catch(e => console.warn("catch", e))
      },[])
      
  return (
    <div className='movies-container'>
      <div className='left-title-and-button'>
      <h1>Your Movies</h1>
      <button onClick={() => {navigate(`/movies/new`)}} style={{width: 200}}> Add Movie </button>
      </div>
        <div className='card-wrapper'>
            <ul className='ul-cards'>
        {moviesData.map((movie, i)=>{
              return(
                <Movie movie={movie} key={i}/>)})}
            </ul>
        </div>
    </div>
  )
}

export default Movies