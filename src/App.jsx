import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Home from './components/pages/Home'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/blog' element={ <Blog /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
