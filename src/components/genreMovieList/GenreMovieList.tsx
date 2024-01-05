import { useEffect, useState } from "react"
import globalApi from "../../services/globalApi"
import MovieList from "../movieList/MovieList";

interface GenresProps {
  id: number
  name: string
}

const GenreMovieList = () => {
  const { generes } = globalApi
  const [genres, setGenres] = useState<GenresProps[]>([]);
  useEffect(() => {
    generes.then(resp => setGenres(resp.data.genres))
  }, [generes])
  return (
    <div className="mt-5">
      {genres && genres.map((item, index) => (
        <div className=" px-8 md:px-16" key={index}>
          <h2 className="mb-3 text-[20px] text-white font-bold">{item.name}</h2>
          <MovieList id={item.id} />
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList
