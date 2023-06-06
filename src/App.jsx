import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Home from './pages/Home'
import Ministries from './pages/Ministries'
import TopNav from './components/TopNav'
import Services from './pages/Services'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Navbar /> 
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/ministries' element={ <Ministries />} />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/events' element={ <Events /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
