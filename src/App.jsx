import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import StatementOfFaith from './pages/StatementOfFaith';
import OurBeliefs from './pages/OurBeliefs';
import Literature from './pages/Literature';
import OurLeaders from './pages/OurLeaders';
import Sermons from './pages/Sermons';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Give from './pages/Give';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/statement-of-faith" element={<StatementOfFaith />} />
            <Route path="/about/our-beliefs" element={<OurBeliefs />} />
            <Route path="/about/literature" element={<Literature />} />
            <Route path="/about/our-leaders" element={<OurLeaders />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/give" element={<Give />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
