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
function App() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const postsCollectionRef = collection(db, "blogs")

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef)
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setIsLoading(false)
        // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      } catch (err) {
        console.log(err)
        setIsLoading(false)
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
          <Route path='/blog' element={ <Blog posts={posts} isLoading={isLoading} /> } />
          <Route path='/events' element={ <Events /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/blogs/:id' element={ <BlogDetails posts={posts} /> } />

          <Route path='/admin' element={ <AddBlogs /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
