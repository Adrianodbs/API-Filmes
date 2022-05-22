import { Container, MovieList, Movie } from './styles'
import { useState, useEffect } from 'react'
import { apiKey } from '../../config/key'

function Home() {
  const [movies, setMovies] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <a href="#">
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </a>

              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  )
}

export default Home