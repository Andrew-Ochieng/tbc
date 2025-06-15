
import React from 'react'
import { Link } from 'react-router-dom'
import sermonImage from '../../assets/hero4.jpg'

export default function HomeSermons() {
  return (
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
                  <img 
                    src={sermonImage} 
                    alt="Sermon Thumbnail"
                    className="object-cover w-full h-full rounded-l-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  The Grace of God in Salvation
                </h3>
                <p className="text-gray-600 mb-4">
                  Pastor Simon Ochieng • Romans 3:21-26 • July 15, 2025
                </p>
                <p className="text-gray-700 mb-6">
                  In this powerful message, we explore the magnificent grace of God revealed in
                  the Gospel of Jesus Christ and how it transforms our understanding of salvation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/sermons"
                    className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg text-center transition-colors"
                  >
                    Listen Now
                  </Link>
                  <Link
                    to="/sermons"
                    className="border border-sky-600 text-sky-600 hover:bg-sky-50 px-6 py-2 rounded-lg text-center transition-colors"
                  >
                    All Sermons
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
