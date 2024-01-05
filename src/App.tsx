import BigSlide from "./components/BigSlide/BigSlide"
import GenreMovieList from "./components/genreMovieList/GenreMovieList"
import Header from "./components/header/Header"
import Production from "./components/production/Production"

const App = () => {
  return (
    <div>
      <Header />
      <BigSlide />
      <Production />
      <GenreMovieList />
    </div>
  )
}

export default App
