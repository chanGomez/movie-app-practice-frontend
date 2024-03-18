import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"


function EditMovieForm() {
    const [movie, setMovie] = useState({
        name: "",
        description: ""
    })

    const {id} = useParams()
    const navigate = useNavigate()
    const API = import.meta.env.VITE_API
    
    useEffect(() => {
        axios.get(`${API}/movies/${id}`).then(({data}) =>{
            setMovie(data.payload)
        })
    }, [id])


    function handleChange(event){
        //dynamic assignment with computed property names
        setMovie({...movie, [event.target.name]: event.target.value})
    }

    function handleSubmit(e){
        e.preventdefault()

        axios.put(`${API}/movies/${id}`, movie).then((response) => {
            navigate(`/movies/${id}`)
        }).catch(e=>{
            console.warn(e)
        })
    }
    

  return (
    <form className="new-movie-form" 
    onSubmit={(e)=> handleSubmit(e)}
    >
    <h4>Edit movie</h4>
    <label>
        please enter the name of your movie:
        <input 
        type="text" 
        name='name' 
        id="name" 
        value={movie.name}
        onChange={(event) => handleChange(event)}
        />
    </label>
    <label>
        please enter the description of your movie:
        <textarea 
        type="text" 
        name='description' 
        id="description" 
        value={movie.description}
        onChange={(event) => handleChange(event)}
        />
    </label>
    <label>
            please enter the discription of your movie:
            <input 
            type="text" 
            name='year' 
            id="year" 
            value={movie.year}
            onChange={(event) => handleChange(event)}
            />
        </label>

        <label className="favorite-checkbox-label">
            please enter the discription of your movie:
            <input 
            type="checkbox" 
            name='favorite' 
            id="favorite" 
            value={movie.favorite}
            onChange={(event) => handleChange(event)}
            />
         <div class="favorite-checkbox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
         </div>
        </label>

    <div className="form-button-container">
        <button type="submit" className="form-button"> Submit </button>
        <button onClick={() => {navigate(`/movies/${id}`)}}> Cancel </button>
    </div>
    </form>
  )
}

export default EditMovieForm