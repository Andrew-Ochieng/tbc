import AboutUs from "../components/Home/AboutUs";
import Hero from "../components/Home/Hero";
import HomeCards from "../components/Home/HomeCards";
import { Link } from "react-router-dom";
import BlogList from "../components/Blog/BlogList";

export default function Home({posts}) {
  return (
    <div>
      <Hero />
      <HomeCards />
      <AboutUs />
      <div className="md:mx-24 mx-4 md:my-32 my-16">
        <div className="flex justify-between items-center md:mb-8 mb-4">
          <h3 className="sub-title">Blog</h3>
          <Link className="sub-title text-cyan-700  hover:underline" to='/blog'>View All</Link>
        </div>
        <BlogList posts={posts.slice(0,3)} />
      </div>
    </div>
  )
}
