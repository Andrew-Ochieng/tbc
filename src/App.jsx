import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Events from './components/pages/Events'
import Home from './components/pages/Home'
import Ministries from './components/pages/Ministries'
import TopNav from './components/TopNav'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Navbar /> 
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
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