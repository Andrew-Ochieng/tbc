import { BookOpen, Heart, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../../assets/hero.jpg'

export default function HomeAbout() {
  return (
    <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-up" data-aos-delay="200">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our Mission & Vision
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We exist to glorify God by making disciples of Jesus Christ through faithful preaching
                    of God's Word, biblical worship, and loving fellowship. Our vision is to see the Gospel
                    transform lives throughout Busia and beyond.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-6 h-6 text-sky-600 mt-1" />
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
                    className="inline-block mt-6 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Learn More About Us
                  </Link>
                </div>
                <div className="bg-gray-200 rounded-lg md:h-96 h-72 flex flex-col items-center justify-center relative overflow-hidden" data-aos="fade-up">
                    <div className="w-full h-full relative flex items-center justify-center">
                        <img 
                        src={aboutImg} 
                        alt="About our church" 
                        className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                </div>
              </div>
            </div>
          </section>
  )
}
