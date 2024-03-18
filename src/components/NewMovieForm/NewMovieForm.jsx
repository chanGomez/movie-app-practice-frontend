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
        <form className="new-movie-form" onSubmit={(e)=> handleSubmit(e)}>
        <h4>New Movie</h4>
        <label>
            please enter the name of your movie:
            <input 
            type="text" 
            name='name' 
            id="name" 
            value={movie.name}
            onChange={(event) => handleNameChange(event)}
            />
        </label>
        <label>
            please enter the discription of your movie:
            <input 
            type="text" 
            name='description' 
            id="description" 
            value={movie.description}
            onChange={(event) => handleDescriptionChange(event)}
            />
        </label>
        
        <label>
            please enter the discription of your movie:
            <input 
            type="text" 
            name='year' 
            id="year" 
            value={movie.year}
            onChange={(event) => handleYearChange(event)}
            />
        </label>

        <label>
            please enter the discription of your movie:
            <input 
            type="checkbox" 
            name='favorite' 
            id="favorite" 
            value={movie.favorite}
            onChange={(event) => handleFavoriteChange(event)}
            />
         <div class="favorite-checkbox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
         </div>
        </label>

        <div className="form-button-container">
            <button onClick={() => {navigate(`/movies`)}}> Back </button>
            <button type="submit" className="form-button"> Submit </button>
            
        </div>
        </form>
    )
}

export default NewMovieForm