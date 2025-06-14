import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: "Christmas Service",
      date: "December 25, 2024",
      time: "9:00 AM",
      location: "Church Sanctuary",
      description: "Join us for a special Christmas service celebrating the birth of our Lord and Savior Jesus Christ.",
      type: "Worship"
    },
    {
      title: "New Year Prayer & Fasting",
      date: "January 1, 2025",
      time: "6:00 AM - 6:00 PM",
      location: "Church Building",
      description: "Begin the new year with prayer and fasting as we seek God's direction and blessing.",
      type: "Prayer"
    },
    {
      title: "Men's Fellowship Breakfast",
      date: "January 11, 2025",
      time: "7:00 AM",
      location: "Fellowship Hall",
      description: "Monthly men's fellowship with breakfast, Bible study, and prayer.",
      type: "Fellowship"
    },
    {
      title: "Women's Bible Study",
      date: "January 15, 2025",
      time: "2:00 PM",
      location: "Conference Room",
      description: "Weekly women's Bible study focusing on Christian womanhood and spiritual growth.",
      type: "Study"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      Worship: 'bg-blue-100 text-blue-800',
      Prayer: 'bg-purple-100 text-purple-800',
      Fellowship: 'bg-green-100 text-green-800',
      Study: 'bg-orange-100 text-orange-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Upcoming events and activities at our church
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">
              Join us for worship, fellowship, and spiritual growth opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-emerald-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-emerald-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                    {event.location}
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {event.description}
                </p>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regular Schedule</h2>
            <p className="text-lg text-gray-600">
              Our weekly worship and fellowship times
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sunday Worship</h3>
              <p className="text-gray-600 mb-4">Main worship service with preaching and fellowship</p>
              <p className="text-2xl font-bold text-blue-600">9:00 AM</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bible Study</h3>
              <p className="text-gray-600 mb-4">Midweek Bible study and prayer</p>
              <p className="text-2xl font-bold text-green-600">Wed 7:00 PM</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prayer Meeting</h3>
              <p className="text-gray-600 mb-4">Corporate prayer for our church and community</p>
              <p className="text-2xl font-bold text-purple-600">Fri 6:30 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
