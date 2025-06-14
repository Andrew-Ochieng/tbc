import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, BookOpen, Users, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to Reformed Baptist Church
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Serving Western Kenya with the Gospel of Jesus Christ
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50">
              We are a Bible-believing church committed to the Reformed faith, seeking to glorify God
              through faithful preaching, biblical worship, and loving fellowship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn About Us
              </Link>
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Us for Worship
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All are welcome to join us as we gather to worship God, study His Word, and fellowship together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sunday Service */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sunday Worship</h3>
              <p className="text-gray-600 mb-4">Main worship service with preaching, prayer, and singing</p>
              <p className="text-2xl font-bold text-blue-600">9:00 AM</p>
            </div>

            {/* Bible Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bible Study</h3>
              <p className="text-gray-600 mb-4">In-depth study of God's Word for spiritual growth</p>
              <p className="text-2xl font-bold text-green-600">Wed 7:00 PM</p>
            </div>

            {/* Prayer Meeting */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prayer Meeting</h3>
              <p className="text-gray-600 mb-4">Corporate prayer for our church and community</p>
              <p className="text-2xl font-bold text-purple-600">Fri 6:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We exist to glorify God by making disciples of Jesus Christ through faithful preaching
                of God's Word, biblical worship, and loving fellowship. Our vision is to see the Gospel
                transform lives throughout Western Kenya and beyond.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Biblical Teaching</h4>
                    <p className="text-gray-600">Committed to expository preaching and sound doctrine</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Loving Community</h4>
                    <p className="text-gray-600">Building relationships centered on Christ's love</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Mission</h4>
                    <p className="text-gray-600">Serving our neighbors and sharing the Gospel</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Church Photo Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Sermon
            </h2>
            <p className="text-lg text-gray-600">
              Listen to our most recent message from God's Word
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="bg-gray-200 h-48 md:h-full flex items-center justify-center">
                  <p className="text-gray-500">Sermon Thumbnail</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  The Grace of God in Salvation
                </h3>
                <p className="text-gray-600 mb-4">
                  Pastor John Kimani • Romans 3:21-26 • December 10, 2024
                </p>
                <p className="text-gray-700 mb-6">
                  In this powerful message, we explore the magnificent grace of God revealed in
                  the Gospel of Jesus Christ and how it transforms our understanding of salvation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/sermons"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-center transition-colors"
                  >
                    Listen Now
                  </Link>
                  <Link
                    to="/sermons"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg text-center transition-colors"
                  >
                    All Sermons
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Come and Worship With Us
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            You are always welcome at Reformed Baptist Church
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Kakamega Town, Western Kenya</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Sunday at 9:00 AM</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
}
