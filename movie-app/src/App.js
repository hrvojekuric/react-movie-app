import './App.css';
import MovieBox from './components/movieBox';
import { useState } from "react"
import { BiSearchAlt2 } from "react-icons/bi"

function App() {

  const [ movie, setMovie ] = useState("")
    const [ search, setSearch ] = useState([])

    const fetchMovies = async () => {
      const url = `https://www.omdbapi.com/?s=${movie}&type=movie&page=1&apikey=${process.env.REACT_APP_MY_API}`
      const response = await fetch(url)
      const responseJson = await response.json()

      if (responseJson.Search) {
        setSearch(responseJson.Search)
      }
    }

  const handleSearch = () => {
      fetchMovies()
    }

  return (
    <div className="App">
        <div className="searchBox">
      <input 
      type="text"
      value={movie}
      onChange={(e) => setMovie(e.target.value)}/>
      <BiSearchAlt2
      className="button"
      onClick={handleSearch}/>
    </div>
     <div className='movieBoxApp'>
    <MovieBox movies={search}/>       
     </div>
    </div>
  );
}

export default App;
