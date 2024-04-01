
import './App.css'
import Header from './Components/Header'
import ImageSlider from './Components/ImageSlider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'

function App() {
  

  return (
    <div className='bg-slate-900 h-screen overflow-y-auto scrollbar-none'>
    <Header/>
    <ImageSlider/>
    <ProductionHouse/>
    <GenreMovieList/>
    </div>
  )
}

export default App
