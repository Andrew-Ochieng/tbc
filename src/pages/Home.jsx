import AboutUs from "../components/Home/AboutUs";
import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import HomeCards from "../components/Home/HomeCards";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeCards />
      <AboutUs />
      <Gallery />
    </div>
  )
}
