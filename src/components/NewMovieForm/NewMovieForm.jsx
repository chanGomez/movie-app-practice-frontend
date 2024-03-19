import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"

const API = import.meta.env.VITE_API

function NewMovieForm() {
    const navigate = useNavigate()
    const [movie, setMovie] = useState({
        name: "",
        description: "", 
        year: "",
        favorite: false
    })

    function handleNameChange(event){
        setMovie({...movie, name: event.target.value})
    }

    function handleDescriptionChange(event){
        setMovie({...movie, description: event.target.value})
    }

    function handleYearChange(event){
        setMovie({...movie, year: event.target.value})
    }

    function handleFavoriteChange(event){
        setMovie({...movie, favorite: !movie.favorite})
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(movie)
        axios.post(`${API}/movies`, movie).then(({data}) => {
            console.log(data.payload.id)
            navigate(`/movies/${data.payload.id}`)
         }).catch(e => {
            console.warn(e)
        })


    }
    
    return(
        <div className="form-container">
        <form className="form" onSubmit={(e)=> handleSubmit(e)}>
        <h4>New Movie</h4>

        <div className="form-group">
        <label>
            Title:
            <input 
            type="text" 
            name='name' 
            id="name" 
            value={movie.name}
            onChange={(event) => handleNameChange(event)}
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
            onChange={(event) => handleDescriptionChange(event)}
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
            onChange={(event) => handleYearChange(event)}
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
            className="ui-checkbox"
            onChange={(event) => handleFavoriteChange(event)}
            />
        </label>
        </div>

        <div className="form-button-container">
            <button onClick={() => {navigate(`/movies`)}}> Back </button>
            <button type="submit" className="form-button"> Submit </button>
            
        </div>

        </form>
        </div>
    )
}

export default NewMovieForm