import { BookOpen, Clock, Users } from 'lucide-react'
import React from 'react'

export default function HomeServices() {
  return (
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
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sunday Worship</h3>
              <p className="text-gray-600 mb-4">Main worship service with preaching, prayer, and singing</p>
              <p className="text-2xl font-bold text-sky-600">9:00 AM</p>
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
  )
}
