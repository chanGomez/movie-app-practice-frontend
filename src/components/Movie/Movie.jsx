import React from 'react'
import { Link } from "react-router-dom"
import "./Movies.css"

function Movie({movie, i}) {
  return (
    <Link to={`/movies/${movie.id}`}><div className='movie-container'>
        <li key={i}>
    <article className="card">
<div className="card-img">
<div className="card-imgs pv delete"></div>
</div>

<div className="project-info">
<div className="flex">
<div className="project-title">{movie.name}</div>
<span className="tag">{movie.year}</span>
</div>
<span className="lighter">
{/* {movie.description} */}
{movie.description.length > 130
        ? movie.description.slice(0, 131) + "..."
        : movie.description}
</span>
</div>
</article>
  </li>
  </div></Link>
  )
}

export default Movie