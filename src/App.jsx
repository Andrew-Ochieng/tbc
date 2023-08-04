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
import { useState, useEffect } from 'react'
import BlogDetails from './components/Blog/BlogDetails'
import { db } from "./firebase/firebaseConfig"
import { getDocs, collection } from 'firebase/firestore'
import AddBlogs from './pages/admin/AddBlogs'
import Login from './pages/admin/Login'
function App() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const postsCollectionRef = collection(db, "blogs")

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef)
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setIsLoading(false)
        setError(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
        setError(true)
      }
    }

    getPosts()
  }, [])

 
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Navbar /> 
        <Routes>
          <Route path='/' element={ <Home posts={posts} /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/ministries' element={ <Ministries />} />
          <Route path='/blogs' element={ <Blog posts={posts} isLoading={isLoading} error={error} /> } />
          <Route path='/events' element={ <Events /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/blogs/:id' element={ <BlogDetails posts={posts} isLoading={isLoading} error={error} /> } />

          <Route path='/admin' element={ <Login /> } />
          <Route path='/addblogs' element={ <AddBlogs /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
