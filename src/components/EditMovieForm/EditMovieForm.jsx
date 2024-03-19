import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"


function EditMovieForm() {
    const [movie, setMovie] = useState({
        name: "",
        description: "", 
        year: "",
        favorite: false
    })

    const {id} = useParams()
    const navigate = useNavigate()
    const API = import.meta.env.VITE_API
    
    useEffect(() => {
        axios.get(`${API}/movies/${id}`).then(({data}) =>{
            setMovie(data.payload)
            console.log(data.payload)
        })
    }, [id])



    function handleChange(event){
        //dynamic assignment with computed property names
        setMovie({...movie, [event.target.name]: event.target.value})
    }

    function handleFavoriteChange(){
        setMovie({...movie, favorite: !movie.favorite})
    }

    function handleSubmit(e){
        e.preventDefault()

        axios.put(`${API}/movies/${id}`, movie).then((response) => {
            navigate(`/movies/${id}`)
        }).catch(e=>{
            console.warn(e)
        })
    }
    

  return (
    <div className="form-container">
    <form className="form" onSubmit={(e)=> handleSubmit(e)}>
    <h4>Edit Movie: {movie.name}</h4>

    <div className="form-group">
    <label>
        Title:
        <input 
        type="text" 
        name='name' 
        id="name" 
        value={movie.name}
        onChange={(event) => handleChange(event)}
        />
    </label>
    </div>
    
    <div className="form-group">
    <label>
        Description:
        <input 
        type="text" 
        name='description' 
        id="description" 
        value={movie.description}
        onChange={(event) => handleChange(event)}
        />
    </label>
    </div>

    <div className="form-group">
    <label>
        Year Released:
        <input 
        type="text" 
        name='year' 
        id="year" 
        value={movie.year}
        onChange={(event) => handleChange(event)}
        />
    </label>
    </div>

    <div className="form-group">
    <label>
        Favorite:
        <input 
        type="checkbox" 
        name='favorite' 
        id="favorite"
        value={movie.favorite} 
        checked={movie.favorite}
        className="ui-checkbox"
        onChange={(event) => handleFavoriteChange(event)}
        />
    </label>
    </div>

    <div className="form-button-container">
         <button onClick={() => {navigate(`/movies/${id}`)}}> Cancel </button>
        <button type="submit" className="form-button"> Submit </button>
        
    </div>

    </form>
    </div>
  )
}

export default EditMovieForm