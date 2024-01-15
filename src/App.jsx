import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/about/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Ministries from './pages/Ministries'
import TopNav from './components/TopNav'
import Services from './pages/Services'
import BlogDetails from './components/Blog/BlogDetails'
import CreateBlogs from './pages/admin/CreateBlogs'
import Login from './pages/admin/Login'
import Blogs from './pages/admin/Blogs'
import Gallery from './pages/about/Gallery'
import ScrollToTop from './components/ScrollToTop'
import { UseFetch } from './components/UseFetch'
function App() {
const {data: posts, isLoading, error } = UseFetch('http://localhost:8000/api/articles/')
console.log(posts)
 
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <TopNav />
        <Navbar /> 
        <Routes>
          <Route path='/' element={ <Home posts={posts} isLoading={isLoading} error={error} /> } />
          <Route path='/gallery' element={ <Gallery /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/ministries' element={ <Ministries />} />
          <Route path='/articles' element={ <Blog posts={posts} isLoading={isLoading} error={error} /> } />
          <Route path='/articles/:slug' element={ <BlogDetails posts={posts} isLoading={isLoading} error={error} /> } />
          <Route path='/contact' element={ <Contact /> } />
          
          <Route path='/admin' element={ <Login /> } />
          <Route path='/admin/create' element={ <CreateBlogs /> } />
          <Route path='/admin/blogs' element={ <Blogs posts={posts} /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
