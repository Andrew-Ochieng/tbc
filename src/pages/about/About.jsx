import Intro from "../../components/About/Intro";
import Leadership from "../../components/About/Leadership";
import Gallery from "../../components/About/Gallery";

export default function About() {
  return (
    <div className="md:space-y-0 space-y-24">
      <Intro />
      <Leadership />
      <Gallery />
    </div>
  )
}
