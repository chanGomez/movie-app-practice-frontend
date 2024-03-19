import { useParams, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


function MovieDetails() {
    const [movie, setMovie] = useState({})
    const [fav, setFav] = useState(false)
    
    const {id} = useParams()
    const navigate = useNavigate()
    const API = import.meta.env.VITE_API

    useEffect(()=>{
        axios.get(`${API}/movies/${id}`).then(({data})=>{
            setMovie(data.payload)
            setFav(data.payload.favorite)
        }).catch(e=>{
            console.warn(e)
        })
    })

    function handleDelete(){
        axios.delete(`${API}/movies/${id}`).then(response => {
            navigate("/movies")
        })
    }

    function handleEdit(){
        navigate(`/movies/${id}/edit`)

    }
  return (
    <section className='movie-details'>
        <h2>{movie.name}</h2>
        <p>{movie.year}</p>
        <p>{movie.description}</p>
        { fav ? <div>🤍</div> : <div style={{filter: "invert()"}}>🤍</div>}
        <div ></div>
        <div className="movie-details-button">
            <button className="button" onClick={handleEdit}>Edit</button>
            <button className="button" onClick={handleDelete}>Delete</button>
        <button onClick={() => {navigate(`/movies`)}}> Back </button>

        </div>

    </section>
    )
}

export default MovieDetails