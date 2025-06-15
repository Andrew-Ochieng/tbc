import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, BookOpen, Users, } from 'lucide-react';
import Hero from '../components/home/Hero';
import HomeAbout from '../components/home/HomeAbout';
import HomeSermons from '../components/home/HomeSermons';
import HomeServices from '../components/home/HomeServices';

export default function Home() {
  return (
    <div>

      <Hero />

      <HomeServices />

      <HomeAbout />

      <HomeSermons />

      <section className="py-16 bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Come and Worship With Us
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            You are always welcome at Reformed Baptist Church
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Busia Town, Busia</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Sunday at 9:00 AM</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-sky-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
}
